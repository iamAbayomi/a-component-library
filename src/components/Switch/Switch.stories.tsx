import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import Switch from "./Switch"

export default {
    title: "Design System/Switch",
    component: Switch
} as ComponentMeta <typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const Primary = Template.bind({})