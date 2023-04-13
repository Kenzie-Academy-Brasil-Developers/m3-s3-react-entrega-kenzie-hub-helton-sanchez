import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/Api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  
  const navigate = useNavigate();
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/home");
        } catch (error) {
          console.log(error);
        }
      };

      userAutoLogin();
    }
  }, []);

  const newUser = async (data) => {
    try {
      await api.post("/users", data);
      navigate("/");
      toast.success(`Você foi cadastrado com sucesso!`);
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "Email já cadastrado"
      ) {
        toast.error("Este email já está cadastrado.");
      } else {
        toast.error("Por favor, verifique os dados informados.");
      }
    }
  };

  const UserLogin = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      const userName =
        response.data.user && response.data.user.name
          ? response.data.user.name
          : "usuário";
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      toast.success(`Você está logado, ${userName}!`);
      navigate("/home");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        toast.error("Email ou senha inválido.");
      } else {
        toast.error("Ocorreu um erro ao efetuar o login.");
      }
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("@TOKEN");
        api.defaults.headers.authorization = `Bearer ${token}`;
        const response = await api.get("/profile");
        setUser(response.data);
      } catch (error) {
        console.log(error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    const userName = user && user.name ? user.name : "usuário";
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
    toast.warning(`Você foi deslogado, ${userName}!`);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        newUser,
        UserLogin,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
