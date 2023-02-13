import React, { HTMLAttributes, ReactChild } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CSSProperties } from "styled-components";
import { IParagraphProps } from "../../utils/types";
import Typography from "../Typography/Typography";

interface props extends IParagraphProps {
  pageStyle?: CSSProperties;
  pageAttributes?: HTMLAttributes<HTMLDivElement>;
  pageHeaderContianerStyle?: CSSProperties;
  pageHeaderContainerAttributes?: HTMLAttributes<HTMLDivElement>;
  children?: ReactChild;
}

const Page = ({ children, ...props }: props) => {
  return (
    <div style={props.pageStyle} {...props.pageAttributes}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          ...props.pageHeaderContianerStyle
        }}
        {...props.pageHeaderContainerAttributes}
      >
        <AiOutlineArrowLeft />
        <Typography
          fontSize={"20px"}
          text={"PageHeading"}
          fontWeight={"600"}
          lineHeight={"24px"}
          paragraphStyle={{
            marginBottom: "0px"
          }}
        />
      </div>
      {children}
    </div>
  );
};

export default Page;
