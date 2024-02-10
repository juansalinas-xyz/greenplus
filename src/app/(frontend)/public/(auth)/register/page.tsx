"use client";

import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Register() {
  const [error, setError] = useState();
  const router = useRouter();
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
    console.log(values);

    try {
      const formData = new FormData(event.currentTarget);

      const signupResponse = await axios.post("----------RUTA AL ENDPOINT----------", values);

      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });

      if (res?.ok) return router.push("/dashboard/profile");
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        console.log(errorMessage);
        setError(errorMessage);
      }
    }
  };

  const handleInputChange = (event) => {
    const {name, value} = event.target;

    setValues({
      ...values,
      [name]: value,
    })
  };

  return (
    <div className="container mx-auto min-w-[355px] max-w-md rounded-md bg-gradient-to-r from-green-800 to-green-600 p-4 shadow-md">
      <div className="rounded-md bg-gradient-to-r from-green-800 to-green-600 p-6">
        <h2 className="mb-4 flex justify-center text-2xl font-semibold text-white">
          Welcome!
        </h2>

        <div className="flex items-center">
          <div className="h-px flex-grow border-spacing-0 border-t border-white"></div>
          <h3 className="m-4 text-white">Sign up with Email</h3>
          <div className="h-px flex-grow border-spacing-0 border-t border-white"></div>
        </div>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-2 bg-red-500 p-2 text-white">{error}</div>
          )}
          <div>
            <div className="flex">
              <label className="text-white">Name</label>
              <label className="ml-32 text-white sm:ml-40">Last Name</label>
            </div>
            <div className="mb-4 flex">
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
          </div>

          <label className="text-white">Document</label>
          <div className="mb-4 flex">
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

          <div className="mb-4">
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
          </div>

          <div className="mb-4">
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
          </div>

          <div className="mb-4">
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
            <Link href="/public/login" className="ml-1 cursor-pointer text-white underline">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
