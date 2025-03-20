import type { Meta, StoryObj } from '@storybook/react'
import TestIcon from 'shared/assets/icons/test-icon.svg'

import { Button } from '.'

const meta = {
  title: 'Basical-UI-Kit/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    mode: 'primary',
    label: 'Primary Button'
  }
}

export const Secondary: Story = {
  args: {
    mode: 'secondary',
    label: 'Secondary Button'
  }
}

export const IconOnly: Story = {
  args: {
    mode: 'primary',
    leftIcon: <TestIcon />
  }
}

export const Clear: Story = {
  args: {
    mode: 'clear',
    label: 'Clear Button'
  }
}

export const Medium: Story = {
  args: {
    mode: 'primary',
    size: 'md',
    label: 'Medium Button'
  }
}

export const Small: Story = {
  args: {
    mode: 'primary',
    size: 'sm',
    label: 'Small Button'
  }
}

export const XSmall: Story = {
  args: {
    mode: 'primary',
    size: 'xs',
    label: 'XSmall Button'
  }
}

export const WithIcon: Story = {
  args: {
    mode: 'primary',
    label: 'With Icon Button',
    leftIcon: <TestIcon />
  }
}
