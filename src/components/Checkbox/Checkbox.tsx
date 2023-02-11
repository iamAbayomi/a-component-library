import React, { ChangeEvent, FC } from "react";
import { colors } from "../../themes";
import "./Checkbox.css";
type props = {
  id: string;
  name: string;
  checked?: boolean;
  value?: string;
  color?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FC<props> = ({ color, ...props }) => {
  return (
    <div>
      <input
        type={"checkbox"}
        style={{ accentColor: color ?? colors?.primaryColor }}
        {...props}
      />
    </div>
  );
};

export default Checkbox;
