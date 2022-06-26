import { ComponentMeta, ComponentStory } from "@storybook/react";
import Badge from "./Badge";


export default {
    title: 'Design System/Badge',
    component: Badge
} as ComponentMeta <typeof Badge>


const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const active = Template.bind({})
active.args = {text: 'Active'}

export const block = Template.bind({})
block.args = { text: 'Block' }

export const successful = Template.bind({})
successful.args = { text: 'Successful' }

export const cancelled = Template.bind({})
cancelled.args = { text : 'Cancelled' }

export const pending  = Template.bind({})
pending.args = { text: 'Pending' }

export const processing = Template.bind({})
processing.args = { text: 'Processing' }

export const decline = Template.bind({})
decline.args = { text: 'Decline' }

export const failed = Template.bind({})
failed.args = { text: 'Failed' }

export const inProgress = Template.bind({})
inProgress.args = { text: 'In progress'}

export const completed = Template.bind({})
completed.args = { text: 'Completed' }

