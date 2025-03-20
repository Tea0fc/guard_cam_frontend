import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from '.'

const meta = {
  title: 'Basical-UI-Kit/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'forms',
      values: [{ name: 'forms', value: '#FFFFFF' }]
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'default',
    label: 'Textarea label',
    placeholder: 'Textarea placeholder',
    helpText: 'This is help text',
    onChange: () => {}
  }
}

export const WithHelpText: Story = {
  args: {
    id: 'helpText',
    placeholder: 'Textarea placeholder',
    helpText: 'This is help text',
    onChange: () => {}
  }
}

export const ErrorStatus: Story = {
  args: {
    id: 'error',
    placeholder: 'Textarea placeholder',
    helpText: 'This is help text',
    helpTextType: 'error',
    onChange: () => {}
  }
}

export const Disabled: Story = {
  args: {
    id: 'disabled',
    placeholder: 'Textarea placeholder',
    helpText: 'This is help text',
    value: 'Disabled',
    onChange: () => {},
    disabled: true
  }
}

export const MediumSize: Story = {
  args: {
    id: 'medium',
    label: 'Textarea label',
    placeholder: 'Textarea placeholder',
    helpText: 'This is help text',
    size: 'md',
    onChange: () => {}
  }
}

export const SmallSize: Story = {
  args: {
    id: 'small',
    label: 'Textarea label',
    placeholder: 'Textarea placeholder',
    helpText: 'This is help text',
    size: 'sm',
    onChange: () => {}
  }
}

export const LargeSize: Story = {
  args: {
    id: 'large',
    label: 'Textarea label',
    placeholder: 'Textarea placeholder',
    helpText: 'This is help text',
    size: 'lg',
    onChange: () => {}
  }
}
