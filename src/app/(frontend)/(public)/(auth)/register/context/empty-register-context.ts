import { FormValues, FormValuesErrors, FormValuesTouched } from "../models/register.interface";
import { BlurEvent, ChangeEvent, SubmitEventType } from "../models/register.type";
import { formValuesObject, formValuesObjectTouched } from "../utilities/formValuesObject.utility";

export interface IRegisterContext {
    formErrors: Partial<FormValuesErrors>,
    isSubmit: boolean,
    formValues: FormValues,
    touched: FormValuesTouched,
    handleSubmit: (e: SubmitEventType) => void,
    handleInputChange: (e: ChangeEvent) => void,
    handleBlur: (e: BlurEvent) => void
};

export const emptyIRegisterContext = {    
    formErrors: {},
    isSubmit: false,
    formValues: formValuesObject,
    touched: formValuesObjectTouched,
    handleSubmit: (e: SubmitEventType) => {},
    handleInputChange: (e: ChangeEvent) => {},
    handleBlur: (e: BlurEvent) => {}
};

