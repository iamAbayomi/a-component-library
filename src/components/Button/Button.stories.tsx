import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "../../themes";
import Button from "./Button";

export default {
  title: "Design System/Button",
  component: Button
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    width: "134px",
    height: "42px",
    buttonText: "Primary",
    onClick: () => {}
  }
};

export const Secondary: Story = {
  args: {
    width: "134px",
    height: "42px",
    color: colors?.primaryColor,
    backgroundColor: colors?.secondaryColor,
    buttonText: "Secondary",
    onClick: () => {}
  }
};
