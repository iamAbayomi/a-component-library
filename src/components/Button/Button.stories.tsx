import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
    title: 'Design System/Button',
    component: Button
} as ComponentMeta <typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
// export const Normal: ComponentStory<typeof Button> = () => <Button buttonText={""} />

export const Primary  = Template.bind({})
Primary.args = {width: '134px', height: '42px', color: 'white' , backgroundColor: '#2196F3', buttonText: 'Primary', onClick: () =>{}}

export const Secondary = Template.bind({})
Secondary.args = {width: '134px', height: '42px', color: '#2196F3' , backgroundColor: 'white', buttonText: 'Secondary', onClick: () =>{}}


