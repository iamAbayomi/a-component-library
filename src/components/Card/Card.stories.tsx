import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../Button/Button";
import Card from './Card'

export default{
    title: 'Design System/Card',
    component: Card
} as ComponentMeta <typeof Card>

const Template : ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Normal = Template.bind({})
// Normal.args = {children: <Button width={'132px'} height={'42px'} color={'white'} margin={'20px 0px'} backgroundColor={'blue'} buttonText={'Secondary'} />}
Normal.args = {children: <div style={{width: "300px", height: "300px"}}></div>}
