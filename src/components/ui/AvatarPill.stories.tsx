import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarPill } from "./AvatarPill";

const meta = {
  title: "ui/AvatarPill",
  component: AvatarPill,
  args: {
    src: "/headshot.png",
    alt: "Emily Serven",
    fallback: "ES",
    name: "Emily",
  },
} satisfies Meta<typeof AvatarPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFallback: Story = {
  args: { src: "/nonexistent.jpg" },
};
