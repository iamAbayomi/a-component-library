import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { IDivProps } from "../../utils/types";
import "./Tag.css";
import "../../styles/global.css";

interface props extends IDivProps {
  text: string;
  showTags: boolean;
  backgroundColor?: string;
  onClickCloseButton?: () => void;
}

const Tags = ({
  text,
  showTags,
  backgroundColor,
  divAttributes,
  divStyle,
  onClickCloseButton
}: props) => {
  function closeTags() {
    onClickCloseButton && onClickCloseButton();
  }
  return (
    <>
      {showTags && (
        <div
          className="tags display-flex align-center"
          style={divStyle}
          {...divAttributes}
        >
          <p>{text}</p>
          <MdOutlineClose onClick={closeTags} />
        </div>
      )}
    </>
  );
};

export default Tags;
