import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkButton } from "./LinkButton";

const meta = {
  title: "ui/LinkButton",
  component: LinkButton,
  args: {
    to: "/",
    children: "Explore more",
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithArrow: Story = {
  args: { hasArrow: true },
};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const Display: Story = {
  args: { size: "display", hasArrow: true },
};
