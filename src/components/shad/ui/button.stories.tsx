import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

const meta = {
  title: "shad/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
    hasArrow: { control: "boolean" },
  },
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Destructive: Story = {
  args: { variant: "destructive" },
};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const LinkVariant: Story = {
  args: { variant: "link" },
};

export const Small: Story = {
  args: { size: "sm" },
};

export const Large: Story = {
  args: { size: "lg" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const SecondaryArrow: Story = {
  args: { variant: "secondary", size: "lg", hasArrow: true },
};

export const OutlineArrow: Story = {
  args: { variant: "outline", size: "lg", hasArrow: true },
};

export const DefaultArrow: Story = {
  args: { variant: "default", size: "lg", hasArrow: true },
};

export const WithHref: Story = {
  args: { href: "/projects", size: "lg", hasArrow: true },
};
