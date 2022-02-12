import { ComponentMeta, ComponentStory } from "@storybook/react";
import Badge from "./Badge";


export default {
    title: 'Design System/Badge',
    component: Badge
} as ComponentMeta <typeof Badge>


const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const active = Template.bind({})
active.args = {text: 'active'}

export const block = Template.bind({})
block.args = { text: 'block' }

export const successful = Template.bind({})
successful.args = { text: 'successful' }

export const cancelled = Template.bind({})
cancelled.args = { text : 'cancelled' }

export const pending  = Template.bind({})
pending.args = { text: 'pending' }

export const processing = Template.bind({})
processing.args = { text: 'processing' }

export const decline = Template.bind({})
decline.args = { text: 'decline' }

export const failed = Template.bind({})
failed.args = { text: 'failed' }

export const inProgress = Template.bind({})
inProgress.args = { text: 'in progress'}

export const completed = Template.bind({})
completed.args = { text: 'completed' }

