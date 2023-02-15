import React, { CSSProperties, HTMLAttributes, ReactChild } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IParagraphProps } from "../../utils/types";
import Typography from "../Typography/Typography";

export interface ITopbarProps extends IParagraphProps {
  pageHeaderContianerStyle?: CSSProperties;
  pageHeaderContainerAttributes?: HTMLAttributes<HTMLDivElement>;
  pageTitle: string;
  onBackArrowClick: () => void;
  icons?: ReactChild;
}

const Topbar = ({ ...props }: ITopbarProps) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          ...props.pageHeaderContianerStyle
        }}
        {...props.pageHeaderContainerAttributes}
      >
        <AiOutlineArrowLeft onClick={props?.onBackArrowClick} />
        <Typography
          fontSize={"20px"}
          text={props?.pageTitle}
          fontWeight={"600"}
          lineHeight={"24px"}
          paragraphStyle={{
            marginBottom: "0px"
          }}
        />
        {props?.icons}
      </div>
    </div>
  );
};

export default Topbar;
