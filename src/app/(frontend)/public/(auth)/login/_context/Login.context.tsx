import { createContext, useContext } from "react";
import { ILoginContext, emptyILoginContext } from "./empty-login-context";

const LoginContext = createContext<ILoginContext>(emptyILoginContext);

type ChildrenType = {
  children: React.ReactElement | React.ReactElement[];
};

export  const LoginProvider = ({ children }: ChildrenType) => {
  const values = {};

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (!context)
    throw new Error("useLoginContext can only be use in LoginProvider");

  return context
};
