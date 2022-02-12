import { ComponentMeta, ComponentStory } from "@storybook/react";
import Badge from "./Badge";


export default {
    title: 'Badge',
    component: Badge
} as ComponentMeta <typeof Badge>


const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const active = Template.bind({})
active.args = {text: 'active'}

export const block: ComponentStory<typeof Badge> = () => <Badge text={'block'} />

export const successful: ComponentStory<typeof Badge> = () => <Badge text={'successful'} />

export const cancelled: ComponentStory<typeof Badge> = () => <Badge text={'cancelled'} />

export const pending: ComponentStory<typeof Badge> = () => <Badge text={'pending'} />

export const processing: ComponentStory<typeof Badge> = () => <Badge text={'processing'} />

export const decline: ComponentStory<typeof Badge> = () => <Badge text={'decline'} />

export const failed: ComponentStory<typeof Badge> = () => <Badge text={'failed'} />

export const inProgess: ComponentStory<typeof Badge> = () => <Badge text={'in progress'} />

export const completed: ComponentStory<typeof Badge> = () => <Badge text={'completed'} />

