import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from './Avatar';

const meta = {
  title: "ui/Avatar",
  component: Avatar,
  args: {
    imgSrc: './headshot-small.jpeg'
  }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoImageSpecified: Story = {
  args: {
    imgSrc: ""
  }
};