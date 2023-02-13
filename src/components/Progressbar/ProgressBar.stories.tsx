import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProgressBar from "./ProgressBar";

export default {
  title: "Design System/Progressbar",
  component: ProgressBar
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: "progress bar",
  value: "20",
  max: "100",
  progessBarAttributes: { accentColor: "red" }
};
