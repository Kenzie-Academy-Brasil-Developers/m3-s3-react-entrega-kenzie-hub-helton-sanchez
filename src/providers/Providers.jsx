import React from "react";
import {  TechnologiesProvider } from "./TechnologiesContext";
import { UserProvider } from "./UserContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechnologiesProvider>
        {children}
      </TechnologiesProvider>
    </UserProvider>
  );
};

export default Providers;
