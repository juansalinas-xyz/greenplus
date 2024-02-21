import axios, { AxiosError } from "axios";
import { FormValues } from "../models/register.interface";

export const registerPost = async (formValues: FormValues, setSent: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const signupResponse = await axios.post(
      "http://localhost:3000/api/users",
      formValues,
    );

    if(signupResponse.data.ok){
        setSent(true);
    }
  } catch (error) {
    console.log(error);
    setSent(false);

    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.message;
      console.log(errorMessage);
      // setFormErrors({ ...formErrors, ...errorMessage });
    }
  }
};
