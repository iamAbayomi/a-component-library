import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Design System/Checkbox",
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

// const Primary: ComponentStory<typeof Checkbox> = () => <Checkbox />

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
