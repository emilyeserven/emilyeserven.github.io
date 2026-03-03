import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

const meta = {
  title: "shad/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <Avatar {...args}>
      <AvatarImage src="/headshot.png" alt="Emily Serven" />
      <AvatarFallback>ES</AvatarFallback>
    </Avatar>
  ),
};

export const Small: Story = {
  args: { size: "sm" },
  render: args => (
    <Avatar {...args}>
      <AvatarImage src="/headshot.png" alt="Emily Serven" />
      <AvatarFallback>ES</AvatarFallback>
    </Avatar>
  ),
};

export const Large: Story = {
  args: { size: "lg" },
  render: args => (
    <Avatar {...args}>
      <AvatarImage src="/headshot.png" alt="Emily Serven" />
      <AvatarFallback>ES</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: args => (
    <Avatar {...args}>
      <AvatarImage src="/nonexistent.jpg" alt="Unknown" />
      <AvatarFallback>??</AvatarFallback>
    </Avatar>
  ),
};
