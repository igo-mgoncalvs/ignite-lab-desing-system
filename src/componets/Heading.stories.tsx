import { Meta , StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from "./heading"

export default {
  title: 'Componets/Heading',
  component: Heading,
  args: {
    children: 'Loren ipsun',
    size: 'md'
  },
  argTypes: {
    size: ['sm', 'md', 'lg'],
    control: {
      type: 'inline-radio'
    }
  }
  
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponet: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with h1</h1>
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
