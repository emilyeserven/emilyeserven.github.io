import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotFound } from "./NotFound";

const meta = {
  title: "NotFound",
  component: NotFound,
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
