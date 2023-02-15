import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navigation from "./Navigation";

export default {
  title: "Design System/Navigation",
  component: Navigation
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  navItems: ["Menu", "Item", "Dashboard", "Section"],
  navItemsStyle: {
    margin: "10px 0px 10px"
  }
};
