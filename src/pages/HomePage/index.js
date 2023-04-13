import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledDashboard = styled.main`
  .loading {
    width: 100%;
    height: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .userInformation {
    width: 90%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px;
    gap: 10px;
    margin: 0 auto;
    margin-top: 30px;
    border: 1px solid #212529;
  }
  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }
  .course {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    /* identical to box height, or 183% */

    color: #868e96;
  }

  .tecnologiesRegister {
    width: 90%;
    display: flex;
    justify-content: space-between;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #f8f9fa;
    margin: 0 auto;
    margin-top: 30px;
  }

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    margin-top: 20px;
  }

  .techsContainer {
    width: 90%;
    height: fit-content;
    background: #212529;
    border-radius: 4px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;
    ul {
      margin-top: 20px;
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 20px;
    }
    li {
      padding: 12.182px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      width: 90%;
      height: 48.73px;
      background: #121214;
      border-radius: 4.06066px;
      align-items: center;
      cursor: pointer;

      h2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 14.2123px;
        line-height: 24px;
        color: #f8f9fa;
      }

      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12.182px;
        line-height: 22px;
        text-align: right;
        color: #868e96;
      }
    }
  }
  @media (min-width: 767px) {
    .userInformation {
      width: 98%;
      display: flex;
      align-items: baseline;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 50px;
    }
  }
`;

export const StyledLinkDashboard = styled(Link)`
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
