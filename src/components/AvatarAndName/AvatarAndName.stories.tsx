import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import AvatarandName from "./AvatarAndName";

export default {
    title: 'Design System/AvatarAndName',
    component: AvatarandName
} as ComponentMeta<typeof AvatarandName>

const Template: ComponentStory<typeof AvatarandName> = (args) => <AvatarandName {...args} />

export const Primary = Template.bind({})
Primary.args = {name: 'James Brown', imageSrc: 'https://avatars2.githubusercontent.com/u/132554'}
