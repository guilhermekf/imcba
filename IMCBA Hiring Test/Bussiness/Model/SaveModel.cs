using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace IMCBA_Hiring_Test.Models
{
    public class SaveModel
    {
        public SaveModel(ContactUsModel contactUsModel)
        {
            Name = contactUsModel.FirstName + " " + contactUsModel.LastName;
            Address = contactUsModel.StreetAddress;
            Address2 = contactUsModel.UnitApt;
            City = contactUsModel.City;
            Province = contactUsModel.Province;
            Email = contactUsModel.Email;
        }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Address2 { get; set; }

        public string City { get; set; }

        public string Province { get; set; }

        public string Email { get; set; }
    }
}