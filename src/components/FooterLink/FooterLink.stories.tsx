import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FooterLink from "./FooterLink";

export default {
  title: "Design System/FooterLink",
  component: FooterLink
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
  <FooterLink {...args} />
);
export const Default = Template.bind({});
Default.args = {
  footerLink: [
    { name: "About Us", link: "/aboutus" },
    { name: "About Us", link: "/aboutus" }
  ]
};
