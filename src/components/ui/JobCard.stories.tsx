import type { Meta, StoryObj } from "@storybook/react-vite";

import {JobCard} from "@/components/ui/JobCard.tsx";

/**
 * Displays a card with header, content, and footer.
 */
const meta = {
  title: "ui/JobCard",
  component: JobCard,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    imageSrc: "./laz-logo.png",
    company: "Employer",
    description: "Company does whaaaat?",
    title: "Underling",
    tags: ["frontend", "react"],
    timeActive: "2025 - present",
  },
  render: (args) => (
    <JobCard {...args} />
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof JobCard>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the card.
 */
export const Default: Story = {};

export const LotsOfTags: Story = {
  args: {
    tags: ["react", "typescript", "javascript", "dashboard", "data-viz", "express", "nextjs", "payloadcms", "wordpress"]
  }
}

export const LongEmployerName: Story = {
  args: {
    company: "A Really Long Company Name For Some Reason"
  }
}

export const LongEmployerDescription: Story = {
  args: {
    description: "A Really Long Company Description For Some Reason A Really Long Company Description For Some Reason A Really Long Company Description For Some Reason A Really Long Company Description For Some Reason A Really Long Company Description For Some Reason"
  }
}
