import { Meta , StoryObj } from '@storybook/react'
import { Button, ButtonProps } from "./button"

export default {
  title: 'Componets/Button',
  component: Button,
  args: {
    children: 'Create accont',
  },
  argTypes: {
    control: {
      type: 'inline-radio'
    }
  }
  
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}