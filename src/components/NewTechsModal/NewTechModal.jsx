import React, { useContext} from "react";
import { NewTechStyled } from "./NewTechStyled";
import { useForm } from "react-hook-form";
import { TechnologiesContext } from "../../providers/TechnologiesContext";


const NewTechsModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addnewTech, setAddTechModal } =  useContext(TechnologiesContext);

  return (
    <NewTechStyled>
      <div className="modalContainer">
        <div className="headerModal">
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={() => setAddTechModal(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit(addnewTech)}>
          <fieldset>
            <label htmlFor="title">Nome</label>
            <input type="text" id="title" {...register("title")} />            
          </fieldset>

          <label htmlFor="status">Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </NewTechStyled>
  );
};

export default NewTechsModal;
