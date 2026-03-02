import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContentSection } from "./ContentSection";
import { Button } from "@/components/shad/ui/button";

const meta = {
  title: "ui/ContentSection",
  component: ContentSection,
  args: {
    heading: "Section Heading",
  },
} satisfies Meta<typeof ContentSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithBody: Story = {
  args: {
    body: "This is a body paragraph that provides additional context about the section.",
  },
};

export const WithChildren: Story = {
  render: args => (
    <ContentSection {...args}>
      <div className="flex flex-wrap gap-4">
        <Button variant="default" size="lg" hasArrow>Primary Action</Button>
        <Button variant="secondary" size="lg" hasArrow>Secondary Action</Button>
      </div>
    </ContentSection>
  ),
};

export const HeadingOnly: Story = {};
