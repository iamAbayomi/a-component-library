import { background } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

type props = {
  backgroundColor?: string;
  children?: any;
  padding?: string;
};

const Card: React.FC<props> = ({ children, ...props }) => {
  return <CardBody {...props}>{children}</CardBody>;
};

export default Card;

const CardBody = styled.div<props>`
  background-color: ${(props) => props.backgroundColor ?? "white"};
  padding: ${(props) => props?.padding ?? "20px 30px 10px 30px"};
  max-width: max-content;
  border-radius: 8px;
  /* Add shadows to create the "card" effect */
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;
