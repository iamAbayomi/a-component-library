import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import FileUpload from "./FileUpload";

export default {
  title: "Design System/FileUpload",
  component: FileUpload
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <FileUpload {...args} />
);

export const Primary = Template.bind({});
