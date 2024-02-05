export interface User {
  name: string;
  lastName: string;
}

export interface BaseUser {
  name: string;
  document: string;
  documentNumber: string;
  email: string;
  phone: string;
  type?:number
}

export interface Person extends BaseUser {
  firstName: string;
  lastName: string;
}

export interface Producer extends BaseUser {
  address: string;
}

export interface Company extends BaseUser {
  address: string;
}

