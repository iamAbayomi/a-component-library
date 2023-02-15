import { Input } from "@chakra-ui/react";
import React from "react";
import { IInputProps } from "../../utils/types";

interface Props extends IInputProps {
  value?: string;
}

const InputField: React.FC<Props> = (Props) => {
  return (
    <Input
      value={Props.value}
      style={Props.inputStyle}
      {...Props.inputAttributes}
    />
  );
};

export default InputField;
