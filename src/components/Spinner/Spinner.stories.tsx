import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Spinner from "./Spinner";

export default {
  title: "Design System/Spinner",
  component: Spinner
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Default = Template.bind({});

Default.args = {
  spinnerStyle: {
    width: "50px",
    height: "50px"
  }
};
