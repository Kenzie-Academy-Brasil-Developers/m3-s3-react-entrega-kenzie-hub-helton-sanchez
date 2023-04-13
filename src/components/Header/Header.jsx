import React from "react";

import StyledHeader from "./index.js";

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <img src="./kenzieHub-Logo.png" alt="Logo KenzieHub" />
      {children}
    </StyledHeader>
  );
};

export default Header;
