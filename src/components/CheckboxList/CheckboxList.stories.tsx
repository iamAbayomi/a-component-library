import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ICardProps, ICheckboxProps } from "../../utils/types";
import CheckboxList from "./CheckboxList";

export default {
  title: "Design System/CheckboxList",
  component: CheckboxList
} as ComponentMeta<typeof CheckboxList>;

interface props extends ICardProps {
  checkboxList: ICheckboxProps[];
}

const Template: ComponentStory<typeof CheckboxList> = (args: props) => (
  <CheckboxList {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  checkboxList: [
    {
      id: "1",
      name: "First"
    },
    {
      id: "2",
      name: "Second"
    },
    {
      id: "3",
      name: "Third"
    }
  ]
};
