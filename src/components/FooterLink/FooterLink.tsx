import { Box, Link, Text } from "@chakra-ui/react";
import React, { CSSProperties, HTMLAttributes } from "react";
import { IItem } from "../../utils/types";

interface props {
  footerLink: IItem[];
  footerContainerAttributes?: HTMLAttributes<HTMLDivElement>;
  footerContainerStyle?: CSSProperties;
  linkAttributes?: HTMLAttributes<HTMLAnchorElement>;
  linkStyle?: CSSProperties;
  textAttributes?: HTMLAttributes<HTMLParagraphElement>;
  textStyle?: CSSProperties;
}

const FooterLink = ({
  footerLink,
  footerContainerAttributes,
  footerContainerStyle,
  textStyle,
  textAttributes,
  ...prop
}: props) => {
  return (
    <Box
      display={"flex"}
      gap={"10px"}
      alignItems={"center"}
      style={footerContainerStyle}
      {...footerContainerAttributes}
    >
      {footerLink?.map((item: IItem) => (
        <Link
          href={item?.link}
          target={"_blank"}
          style={prop.linkStyle}
          {...prop.linkAttributes}
        >
          <Text style={textStyle} {...textAttributes}>
            {item?.name}
          </Text>
        </Link>
      ))}
    </Box>
  );
};

export default FooterLink;
