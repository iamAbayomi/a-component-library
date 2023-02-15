import { Box, Text, Image } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { forwardRef } from "react";
import DatePicker from "./DatePicker";
import { CgArrowsV } from "react-icons/cg";

export default {
  title: "Design System/DatePicker",
  component: DatePicker
} as ComponentMeta<typeof DatePicker>;

const isMobile = true;

type IProps = {
  text?: string;
  onClick: () => void;
  value: Date;
  end_date?: Date;
};

const CustomDateInput = forwardRef(
  ({ value, onClick }: IProps, ref: React.Ref<HTMLDivElement>) => (
    <Box
      ref={ref}
      maxWidth={"max-content"}
      display={"flex"}
      alignItems={"center"}
      onClick={onClick}
    >
      <Text marginBottom={"0px"}>Date</Text>
      <Box
        width={"max-content"}
        margin={"0px 0px 0px 10px"}
        height={"max-content"}
        p={"5px"}
        display={"flex"}
        justifyContent={isMobile ? "space-between" : "normal"}
        background={"white"}
        alignItems={"center"}
        color={"#7C7C7C"}
        fontSize={"14px"}
        overflowY={"scroll"}
        border={"1px solid #E5E5E5"}
        borderRadius={"6px"}
      >
        <Text margin={" 0px 10px"}>{value.toString()}</Text>
        <CgArrowsV />
      </Box>
    </Box>
  )
);

export const Normal: ComponentStory<typeof DatePicker> = () => (
  <DatePicker
    selectRange={true}
    maxDate={new Date()}
    customDateInput={
      <CustomDateInput
        onClick={() => {}}
        value={new Date()}
        end_date={new Date()}
      />
    }
  />
);

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  selectRange: true,
  maxDate: new Date(),
  customDateInput: (
    <CustomDateInput
      onClick={() => {}}
      value={new Date()}
      end_date={new Date()}
    />
  )
};
