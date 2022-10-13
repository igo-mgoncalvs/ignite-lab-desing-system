import { Meta , StoryObj } from '@storybook/react'
import { Text, TextProps } from "./text"

export default {
  title: 'Componets/text',
  component: Text,
  args: {
    children: 'Loren ipsun',
    size: 'md'
  },
  argTypes: {
    size: ['sm','md', 'lg'],
    control: {
      type: 'inline-radio'
    }
  }
  
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponet: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Testando</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}
