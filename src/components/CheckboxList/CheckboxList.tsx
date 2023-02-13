import React from "react";
import { ICardProps, ICheckboxProps } from "../../utils/types";
import Checkbox from "../Checkbox/Checkbox";

interface props extends ICardProps {
  checkboxList: ICheckboxProps[];
}

const CheckboxList = ({ checkboxList, ...props }: props) => {
  return (
    <div style={props.cardStyle} {...props.cardAttributes}>
      {checkboxList?.map((item: ICheckboxProps) => (
        <Checkbox {...item} />
      ))}
    </div>
  );
};

export default CheckboxList;
