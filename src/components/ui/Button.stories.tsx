import type { Meta, StoryObj } from "@storybook/react-vite";

import {Button} from "@/components/ui/Button.tsx";

/**
 * Displays a card with header, content, and footer.
 */
const meta = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    variant: "default",
    size: "default",
    children: "Sample"
  },
  render: (args) => (
    <Button {...args} />
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the card.
 */
export const Default: Story = {};
