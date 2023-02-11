import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Link from "./index";

export default {
  title: "Design System/Link",
  component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Normal = Template.bind({});

Normal.args = { text: "Click Link", goToPage: "https://github.com/iamAbayomi" };
