using FluentValidation;
using IMCBA_Hiring_Test.Models;
using System;

namespace IMCBA_Hiring_Test.ModelValidator
{
    public class ContactUsValidator : AbstractValidator<ContactUsModel>
    {
        public ContactUsValidator()
        {
            RuleFor(x => x.FirstName)
                .NotNull()
                .Length(1, ContactUsModel.FirstNameMaxLength);

            RuleFor(x => x.LastName)
                .NotNull()
                .Length(1, ContactUsModel.LastNameMaxLength);

            RuleFor(x => x.StreetAddress)
                .NotNull()
                .Length(1, ContactUsModel.StreetAddressMaxLength);

            RuleFor(x => x.City)
                .NotNull()
                .Length(1, ContactUsModel.CityMaxLength);

            RuleFor(x => x.Province)
                .NotNull()
                .Length(1, ContactUsModel.ProvinceMaxLength);

            RuleFor(x => x.Email)
                .NotNull()
                .EmailAddress()
                .Length(1, ContactUsModel.EmailMaxLength);
        }
    }
}