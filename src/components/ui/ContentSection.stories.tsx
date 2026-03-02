import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContentSection } from "./ContentSection";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 border-2 border-black">Placeholder card 1</div>
        <div className="p-6 border-2 border-black">Placeholder card 2</div>
        <div className="p-6 border-2 border-black">Placeholder card 3</div>
      </div>
    </ContentSection>
  ),
};

export const HeadingOnly: Story = {};
