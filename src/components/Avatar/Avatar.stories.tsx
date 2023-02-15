import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Avatar from "./Avatar";


export default {
    title: 'Design System/Avatar',
    component: Avatar,
    parameters: {
        description: 'fafaf'
    }
} as ComponentMeta <typeof Avatar >

// This is the avatar documentation

// /**
//  *  This is the avatar documentation
//  */

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {imageSrc: 'https://avatars2.githubusercontent.com/u/132554'}

// export {}