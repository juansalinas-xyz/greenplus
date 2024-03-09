"use client";

import Link from "next/link";
import FormInputs from "./components/FormInputs/FormInputs";
import FormSelect from "./components/FormSelect/FormSelect";
import { useRegisterContext } from "./context/Register.context";
import FormRadioButton from "./components/FormRadioButton/FormRadioButton";

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

  let specificFields;

  switch (formValues.type) {
    case "PERSON":
      specificFields = (
        <div className="flex flex-row gap-3">
          <FormInputs
            value={formValues.firstName}
            handleInputChange={handleInputChange}
            handleBlur={handleBlur}
            touched={touched.firstName}
            formError={formErrors?.firstName}
            id={"firstName"}
            name={"firstName"}
            placeholder={"Name"}
            type={"text"}
          />
          <FormInputs
            value={formValues.lastName}
            handleInputChange={handleInputChange}
            handleBlur={handleBlur}
            touched={touched.lastName}
            formError={formErrors?.lastName}
            id={"lastName"}
            name={"lastName"}
            placeholder={"Lastname"}
            type={"text"}
          />
        </div>
      );
      break;
    case "COMPANY":
      specificFields = (
        <FormInputs
          value={formValues.adress}
          handleInputChange={handleInputChange}
          handleBlur={handleBlur}
          touched={touched.adress}
          formError={formErrors?.adress}
          id={"adress"}
          name={"adress"}
          placeholder={"Adress"}
          type={"text"}
        />
      );
      break;
    case "PRODUCER":
      specificFields = (
        <FormInputs
          value={formValues.adress}
          handleInputChange={handleInputChange}
          handleBlur={handleBlur}
          touched={touched.adress}
          formError={formErrors?.adress}
          id={"adress"}
          name={"adress"}
          placeholder={"Adress"}
          type={"text"}
        />
      );
      break;
  }

  return (
    <div>
      <div className="container mx-auto min-w-[355px] max-w-sm rounded-md bg-slate-200 shadow-md">
        <div className="rounded-md ">
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

          <form onSubmit={handleSubmit}>
            <div className="w-full mb-8 h-7 flex">
              <FormRadioButton
                title={"Persons"}
                id={"personRadio"}
                name={"type"}
                value={"PERSON"}
                handleInputChange={handleInputChange}
                className="flex flex-col h-9 cursor-pointer justify-center items-center rounded-tl-md bg-gray-300 peer-checked:bg-slate-200 peer-checked:border-none"
                checked={formValues.type == "PERSON"}
              />
              <FormRadioButton
                title={"Companies"}
                id={"companyRadio"}
                name={"type"}
                value={"COMPANY"}
                handleInputChange={handleInputChange}
                className="flex flex-col h-9 cursor-pointer justify-center items-center bg-gray-300 peer-checked:bg-slate-200 peer-checked:border-none"
                checked={formValues.type == "COMPANY"}
              />
              <FormRadioButton
                title={"Producers"}
                id={"producerRadio"}
                name={"type"}
                value={"PRODUCER"}
                handleInputChange={handleInputChange}
                className="flex flex-col h-9 cursor-pointer justify-center items-center rounded-tr-md bg-gray-300 peer-checked:bg-slate-200 peer-checked:border-none"
                checked={formValues.type == "PRODUCER"}
              />
            </div>

            <div className="px-9 pb-6">
              <div className="mb-3 mt-3 flex justify-center items-center">
                <div className="h-px flex-grow border-spacing-0 border-t border-black"></div>
                <p className="mx-3 text-slate-950">Welcome</p>
                <div className="h-px flex-grow border-spacing-0 border-t border-black"></div>
              </div>

              <FormInputs
                value={formValues.name}
                handleInputChange={handleInputChange}
                handleBlur={handleBlur}
                touched={touched.name}
                formError={formErrors?.name}
                id={"name"}
                name={"name"}
                placeholder={"Username"}
                type={"text"}
              />

              {specificFields}

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
                      { name: "Passport", value: "passport" },
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
                    id={"documentNumber"}
                    name={"documentNumber"}
                    placeholder={"Document number"}
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
                id={"phone"}
                name={"phone"}
                placeholder={"Phone"}
                type={"number"}
              />

              <FormInputs
                value={formValues.email}
                handleInputChange={handleInputChange}
                handleBlur={handleBlur}
                touched={touched.email}
                formError={formErrors?.email}
                id={"email"}
                name={"email"}
                placeholder={"Email"}
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
                className="mt-3 w-full rounded-md border border-white bg-green-700 px-4 py-1.5 text-white hover:bg-green-800 focus:outline-none"
              >
                Register
              </button>

              <div className="mt-6 h-px flex-grow border-spacing-0 border-t border-slate-950"></div>

              <div className="mt-6 flex justify-center">
                <label className="text-xs text-slate-950">
                  Already registered?
                </label>
                <Link
                  href="/login"
                  className="ml-1 text-xs cursor-pointer text-slate-950 underline"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
