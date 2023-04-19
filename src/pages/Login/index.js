import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogin = styled.div`
  font-family: "Inter";
  height: 90vh;
  background-color: var(--gray-4);

  img {
    width: 114px;
    height: 20px;
  }

  form {
    background: var(--grey-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
    color: var(--grey-0);
    height: 502px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 296px;
    margin: 0 auto;
    margin-top: 40px;
    

    h1 {
      width: 100%;
      text-align: center;
      font-style: normal;
      font-weight: 700;
      font-size: 0.902rem;
      line-height: 22px;
    }

    fieldset {
      width: 94%;

      label {
        display: block;
        font-style: normal;
        font-weight: 400;
        font-size: 9.772px;
        line-height: 30px;
        color: var(--grey-0);
        margin-top: 20px;
      }

      input {
        background-color: yellow;
        width: 97%;
        background: var(--grey-2);
        border: 0.9772px solid var(--grey-0);
        border-radius: 3.20867px;
        height: 38.5px;
        color: var(--grey-0);
      }
    }

    button {
      width: 273px;
      height: 38.5px;
      background: var(--Color-primary);
      border: 1.2182px solid var(--Color-primary);
      border-radius: 4.06066px;
      margin-top: 40px;
      color: #ffffff;
    }
    span {
      font-style: normal;
      font-weight: 600;
      font-size: 0.602rem;
      line-height: 14px;
      color: var(--grey-1);
      margin-top: 20px;
    }
  }

  @media (min-width: 425px) {
    form {
      width: 369px;

      button {
        width: 342px;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  width: 273px;
  height: 38.5px;
  background: var(--grey-1);
  border: 1.2182px solid var(--grey-1);
  border-radius: 4.06066px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 0.802rem;
  line-height: 21px;
  color: var(--grey-0);
  margin-top: 20px;

  @media (min-width: 425px) {
    width: 342px;
  }
`;