import type { Meta, StoryObj } from "@storybook/react-vite";
import { TwoColumnSection } from "./TwoColumnSection";
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
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Featured Project
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl xl:leading-snug mt-4">
          A showcase of the most recent work with details about the approach and technologies used.
        </p>
      </div>
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
