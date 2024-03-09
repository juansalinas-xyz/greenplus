import { FormValuesErrors } from "../models/register.interface";

export const registerValidate = (val:any) => {
    const errors: Partial<FormValuesErrors> = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!val.name) {
      errors.name = "Username is required!";
    } else if (val.name.length < 3) {
      errors.name = "Username must be more than 2 characters.";
    } else if (val.name.length > 20) {
      errors.name = "Username cannot exceed more than 20 characters.";
    }

    if(val.type == "PERSON") {
      if (!val.firstName) {
        errors.firstName = "Name is required!";
      } else if (val.firstName.length < 3) {
        errors.firstName = "Name must be more than 2 characters.";
      } else if (val.firstName.length > 20) {
        errors.firstName = "Name cannot exceed more than 20 characters.";
      }

      if (!val.lastName) {
        errors.lastName = "Lastname is required!";
      } else if (val.lastName.length < 3) {
        errors.lastName = "Lastname must be more than 2 characters.";
      } else if (val.lastName.length > 20) {
        errors.lastName = "Lastname cannot exceed more than 20 characters.";
      }
    }

    if (!val.document) {
      errors.document = "Type is required!";
    }

    if (!val.documentNumber) {
      errors.documentNumber = "Document number is required!";
    } else if (val.documentNumber.length < 6) {
      errors.documentNumber = "Document number must be more than 6 characters.";
    } else if (val.documentNumber.length > 20) {
      errors.documentNumber =
        "Document number cannot exceed more than 20 characters.";
    }

    if (!val.phone) {
      errors.phone = "Phone is required!";
    } else if (val.phone.length < 8) {
      errors.phone = "Invalid phone!";
    } else if (val.phone.length > 20) {
      errors.phone = "Invalid phone!";
    }

    if (!val.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(val.email)) {
      errors.email = "This is not a valid email format!";
    }

    if(val.type != "PERSON"){
      if (!val.adress) {
        errors.adress = "Adress is required!";
      } else if (val.adress.length < 3) {
        errors.adress = "Adress must be more than 2 characters.";
      } else if (val.adress.length > 50) {
        errors.adress = "Adress cannot exceed more than 50 characters.";
      }
    }

    // if (!values.password) {
    //   errors.password = "Password is required!";
    // } else if (values.password.length < 8) {
    //   errors.password = "Password must be more than 8 characters.";
    // } else if (values.password.length > 20) {
    //   errors.password = "Password cannot exceed more than 20 characters.";
    // }

    return errors;
  };