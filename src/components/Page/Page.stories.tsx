import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Page from "./Page";

export default {
  title: "Design System/Page",
  component: Page
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  pageTitle: "Page Title"
};

export const Secondary: ComponentStory<typeof Page> = () => (
  <Page pageTitle={"Secondary Page"} onBackArrowClick={() => {}} />
);
