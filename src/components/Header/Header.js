import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding-bottom: 32px;
`;
const HeaderTitle = styled.h1``;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Lights Out</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
