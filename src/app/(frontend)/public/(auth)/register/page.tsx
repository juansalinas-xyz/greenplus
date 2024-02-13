"use client";

import { FormEvent, useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Register() {
  const router = useRouter();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    documenttype: "",
    documentnumber: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormErrors(validate(values));
    setIsSubmit(true);

    try {
      // const signupResponse = await axios.post("----------RUTA AL ENDPOINT----------", values);
      // const res = await signIn("credentials", {
      //   email: signupResponse.data.email,
      //   password: values.password,
      //   redirect: false,
      // });
      // if (res?.ok) return router.push("/dashboard/profile");
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        console.log(errorMessage);
        setFormErrors(errorMessage);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formErrors);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [formErrors]);

  const validate = (val) => {
    const errors: Record<string, string> = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!val.name) {
      errors.name = "Name is required!";
    }

    if (!val.lastname) {
      errors.lastname = "Lastname is required!";
    }

    if (!val.documenttype) {
      errors.documenttype = "Type is required!";
    }

    if (!val.documentnumber) {
      errors.documentnumber = "Document number is required!";
    }

    if (!val.phone) {
      errors.phone = "Phone is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters.";
    } else if (values.password.length > 20) {
      errors.password = "Password cannot exceed more than 20 characters.";
    }

    return errors;
  };

  return (
    <div>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>
          <div className="w-full justify-center flex items-center mt-12">
            <div className="flex h-16 w-56 items-center justify-center rounded-md border border-green-700 bg-green-100">
              <p className="text-sm text-green-700">Registered successfully</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="container mx-auto min-w-[355px] max-w-md rounded-md bg-gradient-to-r from-green-800 to-green-600 p-4 shadow-md">
        <div className="rounded-md bg-gradient-to-r from-green-800 to-green-600 p-6">
          <h2 className="z-0 mb-2 flex justify-center text-2xl font-semibold text-white">
            Welcome!
          </h2>
          <div className="flex items-center mb-4">
            <div className="h-px flex-grow border-spacing-0 border-t border-white"></div>
            <h3 className="m-3 text-white">Sign up with Email</h3>
            <div className="h-px flex-grow border-spacing-0 border-t border-white"></div>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <div className="flex">
                <label className="text-white">Name</label>
                <label className="ml-32 text-white sm:ml-40">Last Name</label>
              </div>
              <div className="flex mb-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Carlos"
                  value={values.name}
                  className="mr-3 mt-1 w-full rounded-md border border-white bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Alcaraz"
                  value={values.lastname}
                  className="ml-3 mt-1 w-full rounded-md border border-white bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-row">
                <div className="w-4/12">
                  <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                </div>
                <div>
                  <p className="ml-20 mt-1 text-sm text-red-500">
                    {formErrors.lastname}
                  </p>
                </div>
              </div>
            </div>

            <label className="text-white">Document</label>
            <div className="flex mb-3">
              <select
                name="documenttype"
                id="documenttype"
                value={values.documenttype}
                className="mt-1 cursor-pointer rounded-md border border-white bg-transparent p-2 text-white focus:outline-none"
                onChange={handleInputChange}
              >
                <option value="" className="text-black" disabled>
                  Document Type
                </option>
                <option value="dni" className="text-black">
                  DNI
                </option>
                <option value="pasaporte" className="text-black">
                  Pasaporte
                </option>
              </select>
              <input
                type="number"
                id="documentnumber"
                name="documentnumber"
                placeholder="XXXXXXXX"
                value={values.documentnumber}
                className="ml-3 mt-1 w-full rounded-md border border-white bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-row">
              <div className="w-5/12">
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.documenttype}
                </p>
              </div>
              <div className="ml-1">
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.documentnumber}
                </p>
              </div>
            </div>

            <div className="mb-3">
              <label className="text-white">Phone</label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="+54 9 11 XXXX XXXX"
                value={values.phone}
                className="mt-1 w-full rounded-md border border-white bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none"
                onChange={handleInputChange}
              />
              <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
            </div>

            <div className="mb-3">
              <label className="text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="carlosalcaraz1999@gmail.com"
                value={values.email}
                className="mt-1 w-full rounded-md border border-white bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none"
                onChange={handleInputChange}
              />
              <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
            </div>

            <div className="mb-3">
              <label className="text-white">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="**********"
                value={values.password}
                className="mt-1 w-full rounded-md border border-white bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none"
                onChange={handleInputChange}
              />
              <p className="mt-1 text-sm text-red-500">{formErrors.password}</p>
            </div>

            <button
              type="submit"
              className="mt-3 w-full rounded-md border border-white bg-transparent px-4 py-2 text-white hover:bg-green-800 focus:outline-none"
            >
              Register
            </button>

            <div className="mt-8 h-px flex-grow border-spacing-0 border-t border-white"></div>

            <div className="mt-8 flex justify-center">
              <label className="text-sm text-white">Already registered?</label>
              <Link
                href="/public/login"
                className="ml-1 cursor-pointer text-white underline"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
