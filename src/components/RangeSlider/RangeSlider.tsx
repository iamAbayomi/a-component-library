import React from "react";
import { IInputProps, ILabelProps } from "../../utils/types/index";

interface props extends IInputProps, ILabelProps {
  id: string;
  name: string;
  min: string;
  max: string;
}

const RangeSlider = ({
  id,
  name,
  min,
  max,
  inputAttributes,
  inputStyle,
  labelAttributes,
  labelStyle
}: props) => {
  return (
    <div>
      <label htmlFor={id} style={labelStyle} {...labelAttributes}>
        {id}
      </label>
      <input
        type={"range"}
        id={id}
        name={name}
        min={min}
        max={max}
        style={inputStyle}
        {...inputAttributes}
      />
    </div>
  );
};

export default RangeSlider;
