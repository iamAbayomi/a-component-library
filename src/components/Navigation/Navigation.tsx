import React, { HTMLAttributes } from "react";
import { CSSProperties } from "styled-components";
import { IParagraphProps } from "../../utils/types";

interface props {
  navItems: string[];
  navItemsAttributes?: HTMLAttributes<HTMLParagraphElement>;
  navItemsStyle?: CSSProperties;
  navigationContainerAttributes?: HTMLAttributes<HTMLDivElement>;
}

const Navigation = ({
  navItems,
  navItemsAttributes,
  navItemsStyle,
  navigationContainerAttributes
}: props) => {
  return (
    <div {...navigationContainerAttributes}>
      <div>
        {navItems?.map((item) => (
          <p style={navItemsStyle} {...navItemsAttributes}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
