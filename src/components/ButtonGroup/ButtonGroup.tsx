import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { colors } from "../../themes";
import Button from "../Button/Button";

interface props {
  primaryText: string;
  secondaryText: string;
  buttonGap: string;
  border?: string;
}

const ButtonGroup: FC<props> = ({
  primaryText,
  secondaryText,
  buttonGap,
  ...props
}) => {
  return (
    <Box display={"flex"} gap={buttonGap ? buttonGap : "20px"} {...props}>
      <Button
        width={"134px"}
        height={"42px"}
        buttonText={primaryText ?? "Cofirm"}
        backgroundColor={colors?.primaryColor}
        color={colors?.secondaryColor}
      />
      <Button
        width={"134px"}
        height={"42px "}
        buttonText={secondaryText ?? "Decline"}
        color={colors?.primaryColor}
        backgroundColor={colors?.secondaryColor}
      />
    </Box>
  );
};

export default ButtonGroup;
