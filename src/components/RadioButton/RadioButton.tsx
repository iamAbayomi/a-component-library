import React, { CSSProperties, HTMLAttributes } from "react";
import { IRadioButtonProps } from "../../utils/types";

interface props {
  radioButtonGroup: IRadioButtonProps[];
  inputAttributes?: HTMLAttributes<HTMLInputElement>;
  inputStyle?: CSSProperties;
  labelAttributes?: HTMLAttributes<HTMLLabelElement>;
  labelStyle?: CSSProperties;
}

const RadioButton = ({
  radioButtonGroup,
  inputAttributes,
  inputStyle,
  labelAttributes,
  labelStyle
}: props) => {
  return (
    <div>
      {radioButtonGroup?.map((item) => (
        <>
          <input
            type={"radio"}
            id={item?.id}
            name={item?.name}
            value={item?.value}
            style={inputStyle}
            {...inputAttributes}
          />
          <label htmlFor={item?.id} style={labelStyle} {...labelAttributes}>
            {item?.name}
          </label>
        </>
      ))}
    </div>
  );
};

export default RadioButton;
