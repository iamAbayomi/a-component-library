import React, { CSSProperties, HTMLAttributes } from "react";
import "./Spinner.css";

interface props {
  spinnerAttributes?: HTMLAttributes<HTMLDivElement>;
  spinnerStyle?: CSSProperties;
}

const Spinner = ({ spinnerAttributes, spinnerStyle }: props) => {
  return (
    <div className="loader" style={spinnerStyle} {...spinnerAttributes}></div>
  );
};

export default Spinner;
