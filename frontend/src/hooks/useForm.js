import { useState } from "react";

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um e-mail valido.'
    }
};

function useForm(type) {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    function validation(value) {
        if (type === false) return true;
        if (value.length === 0) {
            setError('Preencha um valor.');
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        };
    };

    function onChange({ target }) {
        if (error) validation(target.value);
        setValue(target.value);
    };

    return {
        value,
        setValue,
        onChange,
        error,
        validation: () => validation(value),
        onBlur: () => validation(value)
    };
};

export default useForm;