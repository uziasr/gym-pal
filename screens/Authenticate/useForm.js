import { useState, useEffect } from 'react';

const useForm = (callback, validate, type="post") => {

    const [values, setValues] = useState({});

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values, type));
        setIsSubmitting(true);
    };

    const handleChange = (name, text) => {
        // event.persist();
        setValues(values => ({ ...values, [name]: text }));
    };
    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        setValues
    }
};

export default useForm;