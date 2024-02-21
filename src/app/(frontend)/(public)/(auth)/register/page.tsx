"use client";

import { FormEvent, useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FormInputs from "./components/FormInputs/FormInputs";
import FormSelect from "./components/FormSelect/FormSelect";
import { useRegisterContext } from "./context/Register.context";

function Register() {
  const {
    formErrors,
    isSubmit,
    formValues,
    touched,
    handleSubmit,
    handleInputChange,
    handleBlur,
  } = useRegisterContext();
  return (
    <div>
      <div className="container mx-auto min-w-[355px] max-w-md rounded-md bg-gradient-to-r from-green-800 to-green-600 p-4 shadow-md">
        <div className="rounded-md bg-gradient-to-r from-green-800 to-green-600 p-6">
          <h2 className="z-0 mb-2 flex justify-center text-2xl font-semibold text-white">
            Welcome!
          </h2>
          <div className="relative">
            {formErrors && Object.keys(formErrors).length === 0 && isSubmit ? (
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
            <FormInputs
              value={formValues.name}
              handleInputChange={handleInputChange}
              handleBlur={handleBlur}
              touched={touched.name}
              formError={formErrors?.name}
              title={"Username"}
              id={"name"}
              name={"name"}
              placeholder={"Carlitos"}
              type={"text"}
            />

            <div className="flex flex-row gap-3">
              <FormInputs
                value={formValues.firstName}
                handleInputChange={handleInputChange}
                handleBlur={handleBlur}
                touched={touched.firstName}
                formError={formErrors?.firstName}
                title={"Name"}
                id={"firstName"}
                name={"firstName"}
                placeholder={"Carlos"}
                type={"text"}
              />
              <FormInputs
                value={formValues.lastName}
                handleInputChange={handleInputChange}
                handleBlur={handleBlur}
                touched={touched.lastName}
                formError={formErrors?.lastName}
                title={"Lastname"}
                id={"lastName"}
                name={"lastName"}
                placeholder={"Alcaraz"}
                type={"text"}
              />
            </div>

            <label htmlFor="documentNumber" className="text-white">Document</label>
            <div className="flex flex-row gap-3">
              <div className="w-2/5">
                <FormSelect
                  title={"Document"}
                  id={"document"}
                  name={"document"}
                  handleInputChange={handleInputChange}
                  handleBlur={handleBlur}
                  document={formValues.document}
                  touched={touched.document}
                  formError={formErrors?.document}
                  options={[
                    { name: "Document type", value: "" },
                    { name: "DNI", value: "dni" },
                    { name: "Pasaporte", value: "pasaporte" },
                  ]}
                />
              </div>
              <div className="w-3/5">
                <FormInputs
                  value={formValues.documentNumber}
                  handleInputChange={handleInputChange}
                  handleBlur={handleBlur}
                  touched={touched.documentNumber}
                  formError={formErrors?.documentNumber}
                  title={""}
                  id={"documentNumber"}
                  name={"documentNumber"}
                  placeholder={"XXXXXXXX"}
                  type={"number"}
                />
              </div>
            </div>

            <FormInputs
              value={formValues.phone}
              handleInputChange={handleInputChange}
              handleBlur={handleBlur}
              touched={touched.phone}
              formError={formErrors?.phone}
              title={"Phone"}
              id={"phone"}
              name={"phone"}
              placeholder={"+54 9 11 XXXX XXXX"}
              type={"number"}
            />

            <FormInputs
              value={formValues.email}
              handleInputChange={handleInputChange}
              handleBlur={handleBlur}
              touched={touched.email}
              formError={formErrors?.email}
              title={"Email"}
              id={"email"}
              name={"email"}
              placeholder={"carlosalcaraz1999@gmail.com"}
              type={"email"}
            />

            {/* <FormInputs
              value={formValues.password}
              handleInputChange={handleInputChange}
              handleBlur={handleBlur}
              touched={touched.password}
              formError={formErrors?.password}
              title={"Password"}
              id={"password"}
              name={"password"}
              placeholder={"**********"}
              type={"password"}
            /> */}

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
                href="/login"
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
