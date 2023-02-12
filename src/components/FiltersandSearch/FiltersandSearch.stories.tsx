import { ComponentMeta, ComponentStory } from "@storybook/react";
import FiltersandSearch from "./FiltersandSearch";
import React from "react";

export default {
  title: "Design System/FilterandSearch",
  component: FiltersandSearch
} as ComponentMeta<typeof FiltersandSearch>;

const Template: ComponentStory<typeof FiltersandSearch> = (args) => (
  <FiltersandSearch {...args} />
);

export const Default = Template.bind({});
Default.args = {
  dropdownOptions: [
    { name: "Fola", value: 1 },
    { name: "Tola", value: 2 },
    { name: "Bola", value: 3 }
  ],
  dropdownAttributes: {
    border: "1px solid red",
    borderRadius: "5px",
    placeholder: "Select Name"
  },
  dropdownStyle: {
    padding: "5px 10px 5px 10px"
  },
  dropdownItemValue: "value",
  dropdownItemName: "name"
};
