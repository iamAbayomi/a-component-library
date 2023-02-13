import { ComponentMeta, ComponentStory } from "@storybook/react";
import DropDown from "./DropDown";
import '../../Overview.css'
import React from "react";

export default {
    title: 'Design System/Dropdown',
    component: DropDown
} as ComponentMeta <typeof DropDown>


const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />

//export const Primary = Template.bind({})

// export const Primary : ComponentStory<typeof DropDown> = () => <DropDown menuTitle={"work"} menuItem={['place', 'house']} />

export const Primary = Template.bind({})
Primary.args = { menuTitle: 'work', menuItem: ['place', 'house'] }