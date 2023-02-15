import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ProgressBar from "../Progressbar/ProgressBar";
import Card from "./Card";
import { Text } from "@chakra-ui/react";
import { colors } from "../../themes";

export default {
  title: "Design System/Card",
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
// Normal.args = {children: <Button width={'132px'} height={'42px'} color={'white'} margin={'20px 0px'} backgroundColor={'blue'} buttonText={'Secondary'} />}
Normal.args = {
  children: <div style={{ width: "300px", height: "300px" }}></div>
};

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <div>
      <Text>Hello</Text>
      <ProgressBar
        id={"Pro"}
        value={"20"}
        max={"100"}
        progessBarAttributes={{ color: colors?.primaryColor }}
      />
    </div>
  )
};
