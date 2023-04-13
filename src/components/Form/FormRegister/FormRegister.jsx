import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("E-mail inválido.")
      .required("Campo e-mail é obrigatório."),
    password: yup
      .string()
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
      .matches(/(\W|_)/, "Deve conter no mínimo um caracter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres")
      .required("Campo senha é obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas precisam ser iguais")
      .required("Campo confirmar senha é obrigatório"),
    bio: yup.string().required("Bio é obrigatório"),
    contact: yup.string().required("Contato é obrigatório"),
    course_module: yup
      .string()
      .oneOf([
        "Primeiro Módulo",
        "Segundo Módulo",
        "Terceiro Módulo",
        "Quarto Módulo",
      ])
      .required("Por favor, selecione um módulo."),
  })
  .required();

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { newUser } = useContext(UserContext);

  return (
    <form onSubmit={handleSubmit(newUser)}>
      <h1>Crie sua conta</h1>

      <p>Rapido e grátis, vamos nessa</p>

      <fieldset>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          {...register("name")}
          placeholder="Digite aqui seu nome"
        />
        <p>{errors.name?.message}</p>
      </fieldset>

      <fieldset>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Digite aqui seu email"
        />
        <p>{errors.email?.message}</p>
      </fieldset>

      <fieldset>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Digite aqui sua senha"
        />
        <p>{errors.password?.message}</p>
      </fieldset>

      <fieldset>
        <label htmlFor="confirmPassword">Confirmar Senha:</label>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirme sua senha"
        />
        <p>{errors.confirmPassword?.message}</p>
      </fieldset>

      <fieldset>
        <label htmlFor="bio">Bio:</label>
        <input type="text" {...register("bio")} placeholder="Fale sobre você" />
        <p>{errors.bio?.message}</p>
      </fieldset>

      <fieldset>
        <label htmlFor="contact">Contato:</label>
        <input
          type="text"
          {...register("contact")}
          placeholder="Opção de contato"
        />
        <p>{errors.contact?.message}</p>
      </fieldset>

      <fieldset>
        <label htmlFor="course_module">Selecionar módulo:</label>
        <select {...register("course_module")}>
          <option value="Primeiro Módulo">
            Primeiro Módulo - Introdução ao Frontend
          </option>
          <option value="Segundo Módulo">
            Segundo Módulo - Frontend Avançado
          </option>
          <option value="Terceiro Módulo">
            Terceiro Módulo - Introdução ao Backend
          </option>
          <option value="Quarto Módulo">
            Quarto Módulo - Backend Avançado
          </option>
        </select>
        <p>{errors.course_module?.message}</p>
      </fieldset>

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FormRegister;
