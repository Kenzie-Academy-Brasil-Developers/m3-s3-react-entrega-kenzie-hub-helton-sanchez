import { createContext, useContext, useEffect, useState,  } from "react";
import api from "../services/Api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";


export const TechnologiesContext = createContext({});

export const TechnologiesProvider = ({ children }) => {
 
  const [techs, setTechs] = useState([]);
  const [addTechModal, setAddTechModal] = useState(false);
  const [editTechModal, setEditTechModal] = useState(false);
  const [tecnologie, setTecnologie] = useState(null);

  // Requisição techs cadastradas pelo usuario

  const techsUser = async () => {
    try {
      const userId = localStorage.getItem("@USERID");
      const response = await api.get(`/users/${userId}`);
      setTechs(response.data.techs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    techsUser();
  }, []);

  // Requisição adicionar novas Techs
  const addnewTech = async (data) => {    
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });      
      techsUser()
      setAddTechModal(false)
      //setUser({...user, techs:[...user.techs,response.data]});
      toast.success("Tecnologia cadastrada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechnologiesContext.Provider
      value={{techs, addnewTech, addTechModal, setAddTechModal,tecnologie, setTecnologie, editTechModal, setEditTechModal }}
    >
      {children}
    </TechnologiesContext.Provider>
  );
};
