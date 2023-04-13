import React from "react";
import FormLogin from "../../components/Form/FormLogin/FormLogin";
import { StyledLogin } from ".";
import Header from "../../components/Header/Header";

const Login = () => {
  return (
    <StyledLogin>
      <Header />
      <FormLogin  />
    </StyledLogin>
  );
};

export default Login;
