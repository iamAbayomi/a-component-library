import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RadioButton from "./RadioButton";

export default {
  title: "Design System/Radio Button",
  component: RadioButton
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  radioButtonGroup: [
    { id: "html", name: "fav_lang", label: "html", value: "html" }
  ],
  inputStyle: { marginRight: "10px" }
};
