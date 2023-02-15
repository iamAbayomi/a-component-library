import React from "react";
import { IParagraphProps } from "../../utils/types";

interface props extends IParagraphProps {
  fontSize?: any;
  text?: any;
  fontWeight?: any;
  lineHeight?: any;
  //textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana"
  // textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | 'match-parent'
}

const Typography: React.FC<props> = (props) => {
  return (
    <p
      style={{
        fontSize: `${props.fontSize}`,
        fontWeight: `${props.fontWeight}`,
        lineHeight: `${props.lineHeight}`,
        ...props?.paragraphStyle
        // textAlign:  `${props.textAlign}`
        //textTransform: `${props.textTransform}`
      }}
      {...props?.paragraphAttributes}
    >
      {props.text}
    </p>
  );
};

export default Typography;
