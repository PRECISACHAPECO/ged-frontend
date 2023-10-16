// FormProvider.js

import React, { createContext, useState } from 'react';
import { useForm } from 'react-hook-form';

const FormContext = createContext({});

const FormProvider = ({ children, onSubmit }) => {
    const {
        trigger,
        handleSubmit,
        reset,
        setValue,
        getValues,
        control,
        formState: { errors },
        register,
    } = useForm();

    const values = {
        trigger,
        handleSubmit,
        reset,
        control,
        setValue,
        getValues,
        errors,
        register,
    };

    return (
        <FormContext.Provider value={values}>

            {children}

        </FormContext.Provider>
    );
};

export { FormContext, FormProvider };
