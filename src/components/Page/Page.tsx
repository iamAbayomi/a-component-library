import React, { HTMLAttributes, ReactChild } from "react";
import { CSSProperties } from "styled-components";
import Topbar, { ITopbarProps } from "../Topbar/Topbar";

interface props extends ITopbarProps {
  pageStyle?: CSSProperties;
  pageAttributes?: HTMLAttributes<HTMLDivElement>;
  children?: ReactChild;
}

const Page = ({ children, ...props }: props) => {
  return (
    <div style={props.pageStyle} {...props.pageAttributes}>
      <Topbar {...props} />

      {children}
    </div>
  );
};

export default Page;
