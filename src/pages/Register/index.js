import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRegister = styled.div`
  height: 100%;

  h1 {
    margin-top: 10px;
    font-family: "Inter";
    font-style: normal;
    font-family: "Inter", sans-serif;
    font-weight: var(--font-weight-700);
    font-size: 0.899rem;
    line-height: 22px;
    color: var(--grey-0);
  }

  p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: var(--font-weight-400);
    font-size: 0.6rem;
    line-height: 18px;
    color: var(--grey-1);
  }

  label {
    display: block;
    margin-bottom: 11px;
    margin-top: 10px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: var(--font-weight-400);
    font-size: 0.609rem;
    line-height: 0px;
  }

  fieldset {
    width: 90%;
    margin: 0 auto;
  }

  form {
    margin-top: 20px;
    align-items: center;
    background-color: red;
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--grey-3);
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
    color: var(--grey-0);
  }
  input {
    width: 96%;
    margin-left: 2px;
    height: 38.38px;
    background: var(--grey-2);
    border: 0.973988px solid var(--grey-2);
    border-radius: 3.19812px;
    color: var(--grey-0);
  }
  select {
    width: 99%;
    margin-left: 2px;
    height: 38.38px;
    background: var(--grey-2);
    border: 0.973988px solid var(--grey-2);
    border-radius: 3.19812px;
    color: var(--grey-0);
    margin: 0 auto;
  }

  button {
    background: var(--Color-primary-Negative);
    border: 1.2182px solid var(--Color-primary-Negative);
    border-radius: 4px;
    width: 90%;
    height: 38.38px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 21px;
    color: var(--gray);
  }
  Link {
    text-decoration: none;
    background: var(--grey-3);
    border-radius: 4px;
  }

  @media (min-width: 425px) {
    form {
      width: 370px;
    }
  }
`;

export const StyledLinkRegister = styled(Link)`
  background: var(--grey-3);
  border-radius: 4px;
  padding: 10px 16.2426px;
  color: var(--grey-0);
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.6rem;
  line-height: 23px;
`;
