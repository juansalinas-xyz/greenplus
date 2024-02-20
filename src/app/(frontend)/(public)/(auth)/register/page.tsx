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
    firstName: "",
    lastName: "",
    document: "",
    documentNumber: "",
    phone: "",
    email: "",
    // password: "",
    type: "PERSON",
  });
  const [touched, setTouched] = useState({
    name: false,
    firstName: false,
    lastName: false,
    document: false,
    documentNumber: false,
    phone: false,
    email: false,
    // password: false,
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(values);

    setFormErrors(validate(values));
    setIsSubmit(true);

    try {
      const signupResponse = await axios.post(
        "http://localhost:3000/api/users",
        values,
      );
      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        // password: values.password,
        redirect: false,
      });
      if (res?.ok) return router.push("/dashboard/profile");
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        console.log(errorMessage);
        setFormErrors({ ...formErrors, ...errorMessage });
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
  }, [formErrors, touched]);

  const validate = (val) => {
    const errors: Record<string, string> = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!val.name) {
      errors.name = "Username is required!";
    } else if (values.name.length < 3) {
      errors.name = "Username must be more than 2 characters.";
    } else if (values.name.length > 20) {
      errors.name = "Username cannot exceed more than 20 characters.";
    }

    if (!val.firstName) {
      errors.firstName = "Name is required!";
    } else if (values.firstName.length < 3) {
      errors.firstName = "Name must be more than 2 characters.";
    } else if (values.firstName.length > 20) {
      errors.firstName = "Name cannot exceed more than 20 characters.";
    }

    if (!val.lastName) {
      errors.lastName = "Lastname is required!";
    } else if (values.lastName.length < 3) {
      errors.lastName = "Lastname must be more than 2 characters.";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Lastname cannot exceed more than 20 characters.";
    }

    if (!val.document) {
      errors.document = "Type is required!";
    }

    if (!val.documentNumber) {
      errors.documentNumber = "Document number is required!";
    } else if (values.documentNumber.length < 6) {
      errors.documentNumber = "Document number must be more than 6 characters.";
    } else if (values.documentNumber.length > 20) {
      errors.documentNumber =
        "Document number cannot exceed more than 20 characters.";
    }

    if (!val.phone) {
      errors.phone = "Phone is required!";
    } else if (values.phone.length < 8) {
      errors.phone = "Invalid phone!";
    } else if (values.phone.length > 20) {
      errors.phone = "Invalid phone!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
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

  const handleBlur = (event) => {
    const { name } = event.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    setFormErrors(validate(values));
  };

  return (
    <div>
      <div className="container mx-auto min-w-[355px] max-w-md rounded-md bg-gradient-to-r from-green-800 to-green-600 p-4 shadow-md">
        <div className="rounded-md bg-gradient-to-r from-green-800 to-green-600 p-6">
          <h2 className="z-0 mb-2 flex justify-center text-2xl font-semibold text-white">
            Welcome!
          </h2>
          <div className="relative">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="absolute inset-x-0 mx-auto bottom-0 z-10">
                <div className="mt-12 flex w-full items-center justify-center">
                  <div className="flex h-16 w-56 items-center justify-center rounded-md border border-green-700 bg-green-100">
                    <p className="text-sm text-green-700">
                      Registered successfully
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="mb-1 flex items-center">
            <div className="h-px flex-grow border-spacing-0 border-t border-white"></div>
            <h3 className="m-3 text-white">Sign up with Email</h3>
            <div className="h-px flex-grow border-spacing-0 border-t border-white"></div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="text-white">Username</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Carlitos"
                value={values.name}
                className="mt-1 w-full rounded-md border border-white bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              <p className="mt-1 text-sm text-red-500">
                {touched.name && formErrors.name}
              </p>
            </div>

            <div>
              <div className="flex">
                <label className="text-white">Name</label>
                <label className="ml-32 text-white sm:ml-40">Last Name</label>
              </div>
              <div className="mb-3 flex">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Carlos"
                  value={values.firstName}
                  className="mr-3 mt-1 w-full rounded-md border border-white bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Alcaraz"
                  value={values.lastName}
                  className="ml-3 mt-1 w-full rounded-md border border-white bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="flex flex-row">
                <div className="w-4/12">
                  <p className="mt-1 text-sm text-red-500">
                    {touched.firstName && formErrors.firstName}
                  </p>
                </div>
                <div>
                  <p className="ml-20 mt-1 text-sm text-red-500">
                    {touched.lastName && formErrors.lastName}
                  </p>
                </div>
              </div>
            </div>

            <label className="text-white">Document</label>
            <div className="mb-3 flex">
              <select
                name="document"
                id="document"
                value={values.document}
                className="mt-1 cursor-pointer rounded-md border border-white bg-transparent p-2 text-white focus:outline-none"
                onChange={handleInputChange}
                onBlur={handleBlur}
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
                id="documentNumber"
                name="documentNumber"
                placeholder="XXXXXXXX"
                value={values.documentNumber}
                className="ml-3 mt-1 w-full rounded-md border border-white bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex flex-row">
              <div className="w-5/12">
                <p className="mt-1 text-sm text-red-500">
                  {touched.document && formErrors.documenttype}
                </p>
              </div>
              <div className="ml-1">
                <p className="mt-1 text-sm text-red-500">
                  {touched.documentNumber && formErrors.documentNumber}
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
                onBlur={handleBlur}
              />
              <p className="mt-1 text-sm text-red-500">
                {touched.phone && formErrors.phone}
              </p>
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
                onBlur={handleBlur}
              />
              <p className="mt-1 text-sm text-red-500">
                {touched.email && formErrors.email}
              </p>
            </div>

            {/* <div className="mb-3">
              <label className="text-white">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="**********"
                value={values.password}
                className="mt-1 w-full rounded-md border border-white bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              <p className="mt-1 text-sm text-red-500">{touched.password && formErrors.password}</p>
            </div> */}

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
