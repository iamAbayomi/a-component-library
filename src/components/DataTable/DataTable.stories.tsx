import { background, border } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import DataTable from "./DataTable";

export default {
  title: "Design System/DataTable",
  DataTable: DataTable
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = (args) => (
  <DataTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  tableContainerStyle: {
    padding: "10px"
  },
  tableStyle: {
    padding: "10px",
    border: "0.1px solid grey",
    borderRadius: "40px",
    width: "100%",
    height: "100%"
  },
  tableHeading: ["TO CONVERT ", " INTO ", " MULTIPLY BY"],
  tableHeadingStyle: {
    border: "0.1px solid grey"
  },
  tableData: [
    ["inches", "millimetres (mm)", "25.4"],
    ["feet", "centimetres (mm)", "30.48"],
    ["yards", "millimetres (mm)", "25.4"]
  ],
  tableDataStyle: {
    height: "40px",
    border: "0.1px solid grey"
  }
};
