import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RangeSlider from "./RangeSlider";

export default {
  title: "Design System/RangeSlider",
  component: RangeSlider
} as ComponentMeta<typeof RangeSlider>;

const Template: ComponentStory<typeof RangeSlider> = (args) => (
  <RangeSlider {...args} />
);

export const Default: ComponentStory<typeof RangeSlider> = Template.bind({});
Default.args = {
  id: "vol",
  min: "0",
  max: "50",
  inputStyle: {
    marginLeft: "10px"
  }
};

export const Primary: ComponentStory<typeof RangeSlider> = () => (
  <RangeSlider id={"Vol"} name={"Vol"} min={"0"} max={"100"} />
);
