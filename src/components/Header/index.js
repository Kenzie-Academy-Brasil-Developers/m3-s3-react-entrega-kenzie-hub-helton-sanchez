import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  height: 80px;
  align-items: flex-end;
  width: 90%;
  margin: 0 auto;
  max-width: 1440px;

  img{
    width: 144px;
  }

  button {
    background: #212529;
    border-radius: 3.19812px;
    border: none;
    color: #f8f9fa;
    text-decoration: none;
    padding: 6px 25px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.59437px;
    line-height: 23px;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export default StyledHeader;
