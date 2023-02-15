import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ImageCard, { IImageCard } from "./ImageCard";

export default {
  title: "Design System/ImageCard",
  component: ImageCard
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = (args) => (
  <ImageCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imageSrc: "https://via.placeholder.com/150 ",
  cardStyle: {
    padding: "20px 40px 20px"
  },
  imageStyle: {
    margin: "0px 0px 10px"
  },
  buttonStyle: {
    margin: "10px auto 10px",
    borderRadius: "5px"
  }
};
