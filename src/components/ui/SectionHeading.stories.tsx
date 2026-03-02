import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionHeading } from "./SectionHeading";

const meta = {
  title: "ui/SectionHeading",
  component: SectionHeading,
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Section heading text",
    body: "Optional body text that provides additional context below the heading.",
  },
};

export const HeadingOnly: Story = {
  args: {
    heading: "Heading without body text",
  },
};

export const WithOverrides: Story = {
  args: {
    heading: "White heading on dark background",
    body: "Body text with custom styling.",
    className: "text-white",
    bodyClassName: "font-medium text-white",
  },
  decorators: [
    Story => (
      <div className="bg-portfolio-blue p-8">
        <Story />
      </div>
    ),
  ],
};
