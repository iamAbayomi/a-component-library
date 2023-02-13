import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ImageCard from "./ImageCard";

export default {
  title: "Design System/ImageCard",
  component: ImageCard
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = (args) => (
  <ImageCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  cardStyle: {
    padding: "20px 40px 20px"
  }
};
