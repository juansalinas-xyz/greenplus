import { FormValues, FormValuesTouched, UserType } from "../models/register.interface";

export const formValuesObject: FormValues = {
  name: "",
  firstName: "",
  lastName: "",
  document: "",
  documentNumber: "",
  phone: "",
  email: "",
  // password: "",
  type: UserType.PERSON,
};

export const formValuesObjectTouched: FormValuesTouched = {
    name: false,
    firstName: false,
    lastName: false,
    document: false,
    documentNumber: false,
    phone: false,
    email: false,
    // password: false,
}
