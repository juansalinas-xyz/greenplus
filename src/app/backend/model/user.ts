export const enum UserType {
  PERSON = "PERSON",
  COMPANY = "COMPANY",
  PRODUCER = "PRODUCER"
}

export interface User {
  document: string;
  documentNumber: string;
  email: string;
  phone: string;
  type: UserType
}

export interface Person extends User {
  firstName: string;
  lastName: string;
}

export interface Producer extends User {
  name: string;
  address: string;
}

export interface Company extends User {
  name: string;
  address: string;
}

