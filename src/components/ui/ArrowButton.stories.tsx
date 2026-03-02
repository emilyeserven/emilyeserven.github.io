import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowButton } from "./ArrowButton";

const meta = {
  title: "ui/ArrowButton",
  component: ArrowButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outline", "blue"],
    },
  },
  args: {
    children: "Click Me",
  },
} satisfies Meta<typeof ArrowButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const Blue: Story = {
  args: { variant: "blue" },
};

export const WithHref: Story = {
  args: { href: "/projects" },
};
