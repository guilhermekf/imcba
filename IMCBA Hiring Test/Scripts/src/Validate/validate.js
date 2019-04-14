export const validateNameStep = (values) =>{
    let errors = {};
    if (!values.FirstName) {
        errors.FirstName = 'First Name address is required';
    } 

    if (!values.LastName) {
        errors.LastName = 'Last Name is required';
    }

    return errors;
};

export const validateAddressStep = (values) => {
    let errors = {};

    if (!values.StreetAddress) {
        errors.StreetAddress = 'Street Address is required';
    }

    if (!values.City) {
        errors.City = 'City is required';
    }

    if (!values.Province) {
        errors.Province = 'Province / Territor is required';
    }

    return errors;
};

export const validateEmailStep = (values) =>{
    let errors = {};

    if (!values.Email) {
        errors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.Email)) {
        errors.Email = 'Email address is invalid';
    }
    return errors;
};

const validateForm = (values) => {
    let errors = validateNameStep(values);
    errors = { ...errors, ...validateAddressStep(values) };
    errors = { ...errors, ...validateEmailStep(values) };

    return errors;
};

export default validateForm;