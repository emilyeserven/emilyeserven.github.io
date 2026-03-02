import type { Meta, StoryObj } from "@storybook/react-vite";
import { TwoColumnSection } from "./TwoColumnSection";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

const meta = {
  title: "ui/TwoColumnSection",
  component: TwoColumnSection,
} satisfies Meta<typeof TwoColumnSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: args => (
    <TwoColumnSection {...args}>
      <SectionHeading
        heading="Featured Project"
        body="A showcase of the most recent work with details about the approach and technologies used."
        bodyClassName="mt-4"
      />
      <ProjectCard
        title="Portfolio Site"
        subtitle="Personal website redesign"
        role="Designer & Developer"
        dates="2025–2026"
        tags={["React", "TypeScript", "Tailwind"]}
        href="https://example.com"
        imagePlaceholderColor="#fbbf24"
      />
    </TwoColumnSection>
  ),
};
