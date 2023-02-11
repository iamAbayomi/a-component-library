import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { colors } from "../../themes";
import ButtonGroup from "./ButtonGroup";

export default {
  title: "Design System/ButtonGroup",
  component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>;

// const Template: ComponentStory<typeof Button> = (args) => <ButtonGroup {...args} />
// export const Primary =

export const Primary: ComponentStory<typeof ButtonGroup> = () => (
  <ButtonGroup
    primaryText={"Confirm"}
    secondaryText={"Decline"}
    buttonGap={"20px"}
  />
);
