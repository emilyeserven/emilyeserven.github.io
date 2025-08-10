import type { Meta, StoryObj } from "@storybook/react-vite";

import {Logo} from "@/components/ui/Logo.tsx";

/**
 * Displays a card with header, content, and footer.
 */
const meta = {
  title: "ui/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    theme: "color"
  },
  render: (args) => (
    <Logo {...args} />
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the card.
 */
export const Default: Story = {};
