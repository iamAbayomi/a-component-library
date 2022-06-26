import { ComponentMeta, ComponentStory } from '@storybook/react'
import Navigation from './Navigation'
import {navigationMenuExample }from '../../dummydata/index'
export default {
    title: "Design System/Navigation",
    component: Navigation
} as ComponentMeta <typeof Navigation>


const Template : ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />

export const Primary = Template.bind({})
Primary.args = ({navigationContent: navigationMenuExample })