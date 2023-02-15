import React, { ChangeEvent, FC } from "react";
import { colors } from "../../themes";
import { ICheckboxProps } from "../../utils/types";
import "./Checkbox.css";
interface props extends ICheckboxProps {}

const Checkbox: FC<props> = ({ color, ...props }) => {
  return (
    <div>
      <input
        type={"checkbox"}
        style={{
          accentColor: color ?? colors?.primaryColor,
          marginRight: "10px",
          ...props.inputStyle
        }}
        {...props.inputAttributes}
        {...props}
      />
      <label htmlFor={props.id}>{props.name}</label>
      <br />
    </div>
  );
};

export default Checkbox;
