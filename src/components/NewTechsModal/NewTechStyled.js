import styled from "styled-components";

export const NewTechStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .modalContainer {
    width: 80%;
    height: 342px;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    color: #f8f9fa;
  }

  .headerModal {
    display: flex;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    justify-content: space-around;

    button {
      color: #868e96;
      background-color: #343b41;
      border: none;
    }
  }

  form {
    height: 80%;
    margin: 0 auto; 
    width: 90%;
    margin-top: 30px;

    input {
      background: #343b41;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16.2426px;
      line-height: 26px;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
      width: 97%;
      height: 48px;
      color: #f8f9fa;
    }

    label {
      display: block;
      margin-top: 10px;
      margin-bottom: 20px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;
    }

    select {
      background: #343b41;

      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
      width: 99.5%;
      height: 48px;
      color: #f8f9fa;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16.2426px;
      line-height: 26px;
    }
    option {
      color: #f8f9fa;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16.2426px;
      line-height: 26px;
    }

    button {
      padding: 0px 22.3336px;
      gap: 10.15px;
      width: 100%;
      height: 48px;
      background: #ff577f;
      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;
      margin-top: 30px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
    }
  }

  @media (min-width: 768px) {
    .modalContainer {
      width: 40%;
    }
  }
  @media (min-width: 900px) {
    .modalContainer {
      width: 30%;
    }

    .headerModal {
      justify-content: space-between;

      h3{
      margin-left:20px;
      }
    }
  }
`;
