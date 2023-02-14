import React from "react";
import { IInputProps } from "../../utils/types";

interface props extends IInputProps {}

const Search = ({ ...props }: props) => {
  return (
    <input
      type={"search"}
      style={props?.inputStyle}
      {...props?.inputAttributes}
    />
  );
};

export default Search;
