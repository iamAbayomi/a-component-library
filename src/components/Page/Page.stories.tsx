import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Card from "../Card/Card";
import Typography from "../Typography/Typography";
import Page from "./Page";

export default {
  title: "Design System/Page",
  component: Page
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
