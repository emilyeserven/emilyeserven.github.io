import type { Meta, StoryObj } from '@storybook/react-vite';

import { Pill } from './Pill';

const meta = {
  title: "ui/Pill",
  component: Pill,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    imgSrc: './headshot-small.jpeg',
    children: 'Emily'
  },
  render: (args) => (
      <Pill {...args} />
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Pill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoImage: Story = {
  args: {
    imgSrc: "",
    children: "Emily"
  }
};