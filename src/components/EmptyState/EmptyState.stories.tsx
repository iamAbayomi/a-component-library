import { ComponentMeta, ComponentStory } from "@storybook/react";
import EmptyState  from "./EmptyState"

export default {
    title: 'Design System/EmptyState',
    component: EmptyState
} as ComponentMeta <typeof EmptyState>


const Template: ComponentStory<typeof EmptyState> = (args) => <EmptyState {...args} />

export const Default = Template.bind({})