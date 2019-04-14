using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace IMCBA_Hiring_Test
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
               name: "Provinces",
               url: "api/Provinces",
               defaults: new { controller = "Home", action = "Provinces", id = UrlParameter.Optional }
           );

            routes.MapRoute(
               name: "Cities",
               url: "api/Cities",
               defaults: new { controller = "Home", action = "Cities", id = UrlParameter.Optional }
           );

            routes.MapRoute(
              name: "Save",
              url: "api/Save",
              defaults: new { controller = "Home", action = "Save", id = UrlParameter.Optional }
          );

            routes.MapRoute(
               name: "ContactUs",
               url: "ContactUs",
               defaults: new { controller = "Home", action = "ContactUs", id = UrlParameter.Optional }
           );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "React", id = UrlParameter.Optional }
            );
        }
    }
}
