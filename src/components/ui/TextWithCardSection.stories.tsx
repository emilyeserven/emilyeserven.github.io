import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextWithCardSection } from "./TextWithCardSection";

const meta = {
  title: "ui/TextWithCardSection",
  component: TextWithCardSection,
  args: {
    heading: "Featured Project",
    body: "A showcase of the most recent work with details about the approach and technologies used.",
    project: {
      title: "Portfolio Site",
      subtitle: "Personal website redesign",
      role: "Designer & Developer",
      dates: "2025–2026",
      tags: ["React", "TypeScript", "Tailwind"],
      href: "https://example.com",
      imagePlaceholderColor: "#fbbf24",
    },
  },
} satisfies Meta<typeof TextWithCardSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
