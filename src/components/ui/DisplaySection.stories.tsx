import type { Meta, StoryObj } from "@storybook/react-vite";
import { DisplaySection } from "./DisplaySection";
import { Button } from "@/components/shad/ui/button";

const meta = {
  title: "ui/DisplaySection",
  component: DisplaySection,
} satisfies Meta<typeof DisplaySection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithBody: Story = {
  render: args => (
    <DisplaySection {...args}>
      <h2 className="section-heading">Section Heading</h2>
      <p className="section-body">This is a body paragraph that provides additional context about the section.</p>
    </DisplaySection>
  ),
};

export const WithChildren: Story = {
  render: args => (
    <DisplaySection {...args}>
      <h2 className="section-heading">Section Heading</h2>
      <div className="mt-4 lg:mt-6 flex flex-wrap gap-4">
        <Button variant="default" size="display" hasArrow>Primary Action</Button>
        <Button variant="secondary" size="display" hasArrow>Secondary Action</Button>
      </div>
    </DisplaySection>
  ),
};

export const HeadingOnly: Story = {
  render: args => (
    <DisplaySection {...args}>
      <h2 className="section-heading">Section Heading</h2>
    </DisplaySection>
  ),
};
