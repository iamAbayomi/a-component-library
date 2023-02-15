import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react"
import Search from "./Search";

export default{
    title:"Design System/Search",
    component: Search
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />

export const Default = Template.bind({})
Default.args = {
    
}