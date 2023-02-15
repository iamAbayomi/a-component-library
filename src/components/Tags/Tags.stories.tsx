import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tags from "./Tags";

export default {
  title: "Design System/Tags",
  component: Tags
} as ComponentMeta<typeof Tags>;

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Success",
  showTags: true
};

