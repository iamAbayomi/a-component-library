import { ComponentMeta, ComponentStory } from "@storybook/react"
import Link from "./index"

export default {
    title: "Design System/Link",
    component: Link
} as ComponentMeta <typeof Link>

const Template : ComponentStory <typeof Link> = (args) => <Link {...args} />

export const Normal = Template.bind({})

Normal.args = ({goToPage: "https://github.com/iamAbayomi"})