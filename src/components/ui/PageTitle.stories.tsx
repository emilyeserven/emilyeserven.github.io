import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageTitle } from "./PageTitle";

const meta = {
  title: "ui/PageTitle",
  component: PageTitle,
  args: {
    children: "Work",
  },
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongTitle: Story = {
  args: { children: "Media & Publishing" },
};
