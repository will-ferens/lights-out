import React from "react";
import styled from "styled-components";

import Header from "../Header/Header";
import Board from "../Board/Board";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`
const App = () => {
  return (
    <AppContainer>
      <Header />
      <Board />
    </AppContainer>
  );
};

export default App;
