using IMCBA_Hiring_Test.Bussiness;
using IMCBA_Hiring_Test.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace IMCBA_Hiring_Test.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("ContactUs");
        }

        public ActionResult React()
        {
            return View("React");
        }

        [HttpPost]
        public async Task<JsonResult> Save(ContactUsModel model)
        {
            string error = "Something went wrong!";
            bool saved = false;

            if (ModelState.IsValid)
            {
                if (await IMCBAProxy.SaveContactUsAsync(model))
                {
                    error = "";
                    saved = true;
                }
            }

            return new JsonResult
            {
                Data = new {
                    success = saved,
                    message = error
                },
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }

        [HttpPost]
        public async Task<JsonResult> Cities(String province)
        {
            IEnumerable<string> cities = await IMCBAProxy.GetCitiesAsync(province);

            return new JsonResult
            {
                Data = cities,
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }

        public JsonResult Provinces()
        {
            IEnumerable<ProvinceModel> provinces = IMCBAProxy.GetProvinces();

            return new JsonResult
            {
                Data = provinces,
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }

        public ActionResult ContactUs()
        {
            ContactUsModel model = new ContactUsModel();
            model.ProvinceList = IMCBAProxy.GetProvinces().ToList();
            model.CityList = new List<string>();
            return View(model);
        }

        [HttpPost]
        public async Task<ActionResult> ContactUs(ContactUsModel model)
        {
            if (ModelState.IsValid)
            {
                if (await IMCBAProxy.SaveContactUsAsync(model))
                {
                    return View("Success");
                }

                ModelState.AddModelError("", "Something went wrong!");
            }

            model.ProvinceList = IMCBAProxy.GetProvinces().ToList();
            model.CityList = await IMCBAProxy.GetCitiesAsync(model.Province);
            return View(model);
           
        }
    }
}