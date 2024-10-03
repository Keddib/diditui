import type { Meta, StoryObj } from '@storybook/react'

import { DiditAnimatedLogo } from './index'

const meta: Meta<typeof DiditAnimatedLogo> = {
  title: 'Components/DiditAnimatedLogo',
  component: DiditAnimatedLogo,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'medium'
  }
}