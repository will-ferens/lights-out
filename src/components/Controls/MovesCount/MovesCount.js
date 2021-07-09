import React from "react";
import styled from "styled-components";

const MovesCountValue = styled.h3`
  font-family: "Bebas Neue";
  letter-spacing: 2px;
  font-size: 18px;
`;

const MovesCount = ({ value }) => (
  <MovesCountValue>{value} Moves</MovesCountValue>
);

export default MovesCount;
