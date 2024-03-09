import {
  FormEvent,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  IRegisterContext,
  emptyIRegisterContext,
} from "./empty-register-context";
// import axios, { AxiosError } from "axios";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/router";
import { registerPost } from "../services/registerPost.service";
import {
  BlurEvent,
  ChangeEvent,
  SubmitEventType,
} from "../models/register.type";
import {
  formValuesObject,
  formValuesObjectTouched,
} from "../utilities/formValuesObject.utility";
import {
  FormValues,
  FormValuesErrors,
  FormValuesTouched,
} from "../models/register.interface";
import { registerValidate } from "../utilities/registerValidate.utility";

const RegisterContext = createContext<IRegisterContext>(emptyIRegisterContext);

type ChildrenType = {
  children: React.ReactElement | React.ReactElement[];
};

export const RegisterProvider = ({ children }: ChildrenType) => {
  // const router = useRouter();
  const [sent, setSent] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<Partial<FormValuesErrors>>();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [formValues, setValues] = useState<FormValues>(formValuesObject);
  const [touched, setTouched] = useState<FormValuesTouched>(
    formValuesObjectTouched,
  );

  useEffect(() => {
    if(formErrors && Object.keys(formErrors).length === 0 && isSubmit){
      registerPost(formValues, setSent);
      console.log("________________________ENTRO________________________");//---------------BORRAR---------------
    }
    setIsSubmit(false);
  }, [isSubmit]);

  const handleSubmit = async (event: SubmitEventType) => {
    event.preventDefault();

    setFormErrors(registerValidate(formValues));

    if (formErrors && Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
    }

    console.log(".....................................................");
    console.log(formErrors);
    console.log(".....................................................");
  };

  const handleInputChange = (event: ChangeEvent) => {
    const { name, value } = event.target;

    setValues({
      ...formValues,
      [name]: value,
    });

    setFormErrors(registerValidate(formValues));
  };

  // useEffect(() => {
  //   console.log(formErrors);

  //   if (formErrors && Object.keys(formErrors).length === 0 && isSubmit) {
  //     setSent(true);
  //   }
  // }, [isSubmit]);

  const handleBlur = (event: BlurEvent) => {
    const { name } = event.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    setFormErrors(registerValidate(formValues));
  };

  const values = {
    formErrors,
    isSubmit,
    formValues,
    touched,
    handleSubmit,
    handleInputChange,
    handleBlur,
  };

  return (
    <RegisterContext.Provider value={values}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => {
  const context = useContext(RegisterContext);

  if (!context)
    throw new Error("useRegisterContext can only be use in RegisterProvider");

  return context;
};
