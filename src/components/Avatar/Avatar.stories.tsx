import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Avatar from ".";

export default {
  title: "Design System/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["tiny", "small", "medium", "large"]
    }
  },
  parameters: {
    description: "fafaf",
    componentSubtitle:
      "Displays an image that represents a user or organization."
  }
} as ComponentMeta<typeof Avatar>;

// This is the avatar documentation

// /**
//  *  This is the avatar documentation
//  */

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = { imageSrc: "https://avatars2.githubusercontent.com/u/132554" };

// export {}
