import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'
import { TestIcon } from 'shared/assets/icons'

const meta = {
  title: 'Basical-UI-Kit/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'forms',
      values: [{ name: 'forms', value: '#FFFFFF' }]
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'default',
    placeholder: 'Input placeholder',
    helpText: 'This is help text',
    onChange: () => {}
  }
}

export const ErrorStatusInput: Story = {
  args: {
    id: 'error',
    placeholder: 'Input placeholder',
    helpText: 'This is help text',
    helpTextType: 'error',
    value: 'Error value',
    onChange: () => {}
  }
}

export const WithLabelInput: Story = {
  args: {
    id: 'withLabel',
    placeholder: 'Input placeholder',
    helpText: 'This is help text',
    label: 'This is label',
    value: 'Value with label',
    onChange: () => {}
  }
}

export const RoundedInput: Story = {
  args: {
    id: 'rounded',
    placeholder: 'Input placeholder',
    helpText: 'This is help text',
    label: 'This rounded input',
    value: 'Rounded value',
    showReset: true,
    borderRound: true,
    icon: <TestIcon />,
    onChange: () => {}
  }
}

export const PasswordInput: Story = {
  args: {
    id: 'password',
    placeholder: 'Input placeholder',
    helpText: 'This is help text',
    label: 'This is label',
    value: 'passw0rd',
    isPassword: true,
    icon: <TestIcon />,
    onChange: () => {}
  }
}

export const Disabled: Story = {
  args: {
    id: 'disabled',
    placeholder: 'Input placeholder',
    helpText: 'This is help text',
    value: 'Error value',
    disabled: true,
    onChange: () => {}
  }
}

export const MediumSizeInput: Story = {
  args: {
    id: 'medium',
    placeholder: 'Input placeholder',
    helpText: 'This is help text',
    size: 'md',
    onChange: () => {}
  }
}

export const SmallSizeInput: Story = {
  args: {
    id: 'small',
    placeholder: 'Input placeholder',
    helpText: 'This is help text',
    size: 'sm',
    onChange: () => {}
  }
}

export const largeSizeInput: Story = {
  args: {
    id: 'large',
    placeholder: 'Input placeholder',
    helpText: 'This is help text',
    size: 'lg',
    value: 'Rounded value',
    showReset: true,
    icon: <TestIcon />,
    onChange: () => {}
  }
}
