import React, { createContext, useState } from 'react';

const defaultValues = {
    setReportParameters: () => { }
}

const FormContext = createContext(defaultValues);

const FormProvider = ({ children }) => {

    const setReportParameters = (parameters) => {
        const values = {
            id: parameters.id,
            nameComponent: parameters.nameComponent, //? Mesmo nome do componente
            route: parameters.route, //? Rota do backend
            unidadeID: parameters.unidadeID,
            papelID: parameters.papelID,
            usuarioID: parameters.usuarioID,
        }
        localStorage.setItem('report', JSON.stringify(values));
    }

    const values = {
        setReportParameters
    };

    return (
        <FormContext.Provider value={values}>
            {children}
        </FormContext.Provider>
    );
};

const useFormContext = () => {
    return React.useContext(FormContext);
};

export { FormContext, FormProvider, useFormContext };
