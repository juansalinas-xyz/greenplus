export interface FormValues {
    name: string,
    firstName: string,
    lastName: string,
    document: string,
    documentNumber: string,
    phone: string,
    email: string,
    // password: string,
    type: UserType,
}

export interface FormValuesTouched {
    name: boolean,
    firstName: boolean,
    lastName: boolean,
    document: boolean,
    documentNumber: boolean,
    phone: boolean,
    email: boolean,
    // password: boolean,
}

export interface FormValuesErrors {
    name: string,
    firstName: string,
    lastName: string,
    document: string,
    documentNumber: string,
    phone: string,
    email: string,
    // password: string,
}

export enum UserType {
    PERSON = "PERSON",
    PRODUCER = "PRODUCER",
    COMPANY = "COMPANY"
}