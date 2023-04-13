import React, { useContext } from "react";
import { StyledDashboard, StyledLinkDashboard } from ".";
import Header from "../../components/Header/Header";
import NewTechsModal from "../../components/NewTechsModal/NewTechModal";
import UserDash from "../../components/UserDash/UserDash";
import { TechnologiesContext } from "../../providers/TechnologiesContext";
import { UserContext } from "../../providers/UserContext";

const HomePage = () => {
  const { handleLogout } = useContext(UserContext);
  const {
    techs,
    addTechModal,
    setAddTechModal,
    tecnologie,
    editTechModal,
    setEditTechModal,
  } = useContext(TechnologiesContext);
  return (
    <>
      <Header>
        <StyledLinkDashboard to="/" onClick={handleLogout}>
          Sair
        </StyledLinkDashboard>
      </Header>
      <StyledDashboard>
        <UserDash />
        <div className="tecnologiesRegister">
          <h2>Tecnologias</h2>
          <button onClick={() => setAddTechModal(true)}>+</button>
        </div>
        <div className="techsContainer">
          {techs.length > 0 ? (
            <ul>
              {techs.map((tech) => {
                return (
                  <li
                    key={tech.id}
                    onClick={() => {
                      // setEditTechModal(true);
                      // //tecnologie(tech);
                    }}
                  >
                    <h2>{tech.title}</h2>
                    <span>{tech.status}</span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <h1>Nenhuma tech cadastrada!</h1>
          )}
        </div>

        {addTechModal ? <NewTechsModal /> : null}
        {addTechModal ? <NewTechsModal /> : null}
      </StyledDashboard>
    </>
  );
};

export default HomePage;
