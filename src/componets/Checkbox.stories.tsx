import { Meta , StoryObj } from '@storybook/react'
import { CheckBox, CheckBoxProps } from "./checkbox"
import { Text } from './text'

export default {
  title: 'Componets/Checkbox',
  component: CheckBox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='sm'>Lembrar-se de mim por 30 dias</Text>
        </div>
      )
    }
  ]
  
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}