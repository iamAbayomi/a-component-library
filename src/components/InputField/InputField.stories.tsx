import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputField from "./InputField";

export default {
    title: 'Design System/InputField',
    component: InputField
} as ComponentMeta <typeof InputField >

export const primary : ComponentStory <typeof InputField> = () => <InputField type={"name"} placeholder={"John Doe"} />

