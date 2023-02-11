import styled from "styled-components";
import React, { MouseEventHandler } from "react";
import { colors } from "../../themes";
type props = {
  width: string;
  height: string;
  color?: string;
  margin?: string;
  backgroundColor?: string;
  buttonText?: string;
  borderRadius?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

// This component aims to determine the reusable component
const Button: React.FC<props> = (props) => {
  return (
    <div>
      <ButtonStyle
        style={{
          // width: `${props.width}`,
          height: `${props.height}`,
          color: `${props.color ? props.color : colors?.secondaryColor}`,
          backgroundColor: `${
            props.backgroundColor ? props.backgroundColor : colors?.primaryColor
          }`,
          margin: `${props.margin}`,
          border: `1px solid ${
            props.backgroundColor ? props.backgroundColor : colors?.primaryColor
          }`,
          borderRadius: `${props.borderRadius ? props?.borderRadius : "8px"}`
          // border: `1px solid grey`
        }}
        onClick={props.onClick}
      >
        {props.buttonText}
      </ButtonStyle>
    </div>
  );
};

export default Button;

const ButtonStyle = styled.button`
  max-width: max-content;
  display: block;
  /* Add shadows to create the "card" effect */
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 0px 30px;
  font-weight: 400;
  transition: 0.3s;
`;
