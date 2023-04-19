import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { StyledLink } from "../../../pages/Login/index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../../providers/UserContext";

const FormLogin = () => {
  const schema = yup
    .object({
      email: yup.string().required("Campo e-mail é obrigatório."),
      password: yup.string().required("Campo senha é obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { UserLogin } = useContext(UserContext);

  return (
    <form onSubmit={handleSubmit(UserLogin)}>
      <h1>Login</h1>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="samuel@kenzie.com.br"
        />
        <span>{errors.email?.message}</span>
      </fieldset>
      <fieldset>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          {...register("password")}
          placeholder="●●●●●●●●●●●●●"
        />
        <span>{errors.password?.message}</span>
      </fieldset>
      <button>Entrar</button>
      <span>Ainda não possui uma conta?</span>
      <StyledLink to="/register">Cadastre-se</StyledLink>
    </form>
  );
};

export default FormLogin;
