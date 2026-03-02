import type { Meta, StoryObj } from "@storybook/react-vite";
import { DisplaySection } from "./DisplaySection";
import { Button } from "@/components/shad/ui/button";

const meta = {
  title: "ui/DisplaySection",
  component: DisplaySection,
  args: {
    heading: "Section Heading",
  },
} satisfies Meta<typeof DisplaySection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithBody: Story = {
  args: {
    body: "This is a body paragraph that provides additional context about the section.",
  },
};

export const WithChildren: Story = {
  render: args => (
    <DisplaySection {...args}>
      <div className="flex flex-wrap gap-4">
        <Button variant="default" size="display" hasArrow>Primary Action</Button>
        <Button variant="secondary" size="display" hasArrow>Secondary Action</Button>
      </div>
    </DisplaySection>
  ),
};

export const HeadingOnly: Story = {};
