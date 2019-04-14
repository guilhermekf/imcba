using FluentValidation.Attributes;
using IMCBA_Hiring_Test.ModelValidator;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace IMCBA_Hiring_Test.Models
{
    [Validator(typeof(ContactUsValidator))]
    public class ContactUsModel
    {
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Display(Name = "Street Address")]
        public string StreetAddress { get; set; }

        [Display(Name = "Unit/Apt")]
        public string UnitApt { get; set; }

        [Display(Name = "City")]
        public string City { get; set; }

        [Display(Name = "Province / Territory")]
        public string Province { get; set; }

        [Display(Name = "Email")]
        public string Email { get; set; }


        public IEnumerable<ProvinceModel> ProvinceList { get; set; }
        public IEnumerable<string> CityList { get; set; }

        public static int FirstNameMaxLength = 40;
        public static int LastNameMaxLength = 40;
        public static int StreetAddressMaxLength = 128;
        public static int UnitAptMaxLength = 128;
        public static int EmailMaxLength = 128;
        public static int CityMaxLength = 32;
        public static int ProvinceMaxLength = 32;
    }
}