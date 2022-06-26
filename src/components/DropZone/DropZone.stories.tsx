import { ComponentMeta, ComponentStory } from "@storybook/react"
import DropZone from "./DropZone"

export default {
    title: "Design System/DropZone",
    component: DropZone,
} as ComponentMeta <typeof DropZone>

const Template: ComponentStory<typeof DropZone> = (args) => <DropZone {...args} />

export const Primary = Template.bind({})