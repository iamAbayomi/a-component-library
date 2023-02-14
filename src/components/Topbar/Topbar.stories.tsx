import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Topbar from "./Topbar";

export default {
  title: "Design System/Topbar",
  component: Topbar
} as ComponentMeta<typeof Topbar>;

const Template: ComponentStory<typeof Topbar> = (args) => <Topbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageTitle: "Topbar"
};
