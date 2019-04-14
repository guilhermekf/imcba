; // To prevent malformed script before this script;

const Validator = (function () {

    'use strict';

    var validator = {}

    /**
    * Default settings.
    *
    **/
    validator.defaults = {
        ignoreTitle: true,
        onkeyup: false,
        onclick: false,
        onfocusin: false,
        onfocusout: false,
        highlight: function (element) {
            $(element).closest('div').addClass('has-error has-feedback');
        },
        unhighlight: function (element) {
            $(element).closest('div').removeClass('has-error has-feedback');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        removeHighlight: function (element, errorClass, validClass) {
            if (element.type === "radio") {
                this.findByName(element.name).removeClass(errorClass).removeClass(validClass);
            } else {
                $(element).removeClass(errorClass).removeClass(validClass);
            }
        },
        resetFormHighlight: function (form, errorClass, validClass) {
            $('.has-error.has-feedback', form).removeClass('has-error has-feedback');
        }
    };

    /**
    * Initialize validator
    *
    * @param validationForm form to validate
    * @param resetForm reset form to initial page state
    * @param userOptions user settings
    *
    * @return validatorObject
    *
    **/
    validator.initializeValidator = function (validationForm, resetForm, userOptions) {
        var validatorObject;

        userOptions = $.extend(true, validator.defaults, userOptions);

        validatorObject = $(validationForm).validate(userOptions);
        if (resetForm) {
            validatorObject.resetForm();
        }

        return validatorObject;
    };


    /**
    * Validate form
    *
    * @param validatorObject object return from initialize function
    * @param removeValidationFeedBack reset bootstrap modification to validadte
    *
    * @return boolean determining if form is valid or not
    *
    **/
    validator.validateForm = function (validatorObject, form) {

        if (form) {
            $('.has-error.has-feedback', form).removeClass('has-error has-feedback');
        }
        if (validatorObject.form()) {
            return true;
        } else {
            return false;
        }
    };

    /**
    * Expose public methods.
    *
    * @return object with public methods.
    *
    **/
    return {
        InitializeValidator: validator.initializeValidator,
        ValidateForm: validator.validateForm
    }
})();