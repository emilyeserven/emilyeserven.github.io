import type { Meta, StoryObj } from '@storybook/react-vite';

import { NavigationMenu } from './NavigationMenu';

const meta = {
  title: "ui/NavigationMenu",
  component: NavigationMenu,
  argTypes: {
    menuItems: {
      control: "text"
    }
  },
  args: {
    menuItems: 'Home, About'
  }
} satisfies Meta<typeof NavigationMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};