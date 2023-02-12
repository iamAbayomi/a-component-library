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

function logToConsole() {
  console.log("Filter And Search  clicked");
}

export const Primary: ComponentStory<typeof FiltersandSearch> = () => (
  <FiltersandSearch
    dropdownOptions={[
      { name: "Fola", value: 1 },
      { name: "Tola", value: 2 },
      { name: "Bola", value: 3 }
    ]}
    dropdownItemValue={"name"}
    dropdownItemName={"value"}
    dropdownAttributes={{
      placeholder: "Select Name",
      onClick: () => console.log("I clicked the dropdown")
    }}
  />
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
