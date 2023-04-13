import { StyledLinkRegister } from "../../pages/Register/index";
import { StyledRegister } from ".";

import FormRegister from "../../components/Form/FormRegister/FormRegister";
import Header from "../../components/Header/Header";

const Register = () => {
  return (
    <StyledRegister>
      <Header>
        <StyledLinkRegister to="/">Voltar</StyledLinkRegister>
      </Header>
      <FormRegister />
    </StyledRegister>
  );
};

export default Register;
