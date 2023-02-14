import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tabs from "./Tabs";

export default {
  title: "Design System/Tabs",
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabHeader: ["First Tab", "Second Tab"],
  tabContent: [<p>First Tab</p>, <p>Second Tab</p>]
};
