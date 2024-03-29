import React, { HTMLAttributes } from "react";

interface IProps {
  id: string;
  value: string;
  max: string;
  progessBarAttributes?: HTMLAttributes<HTMLProgressElement>;
}

const ProgressBar = ({ id, max, value, progessBarAttributes }: IProps) => {
  console.log("id ", id, " max ", max);
  return (
    <div>
      <label htmlFor={id}>{id}</label>
      <progress id={id} max={max} value={value} {...progessBarAttributes}>
        {value}
      </progress>
    </div>
  );
};
export default ProgressBar;
