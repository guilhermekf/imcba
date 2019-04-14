import { useState } from 'react';

const useForm = (initialState, callback, validateForm) => {

    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        const newErrors = validateForm(values);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            callback(event);
        }
    };

    const validate = (validateFunction) => {
        const newErrors = validateFunction(values);
        setErrors(newErrors);
        return newErrors;
    };


    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.id]: event.target.value }));
    };

    return {
        handleChange,
        handleSubmit,
        validate,
        values,
        errors,
    }
};

export default useForm;