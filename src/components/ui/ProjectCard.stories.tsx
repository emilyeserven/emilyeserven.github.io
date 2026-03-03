import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProjectCard } from "./ProjectCard";

const meta = {
  title: "ui/ProjectCard",
  component: ProjectCard,
  args: {
    title: "Project Title",
    subtitle: "A brief description of the project",
    role: "Lead Developer",
    dates: "2024–2026",
    tags: ["React", "TypeScript", "Tailwind"],
    href: "https://example.com",
    imagePlaceholderColor: "#93c5fd",
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutLink: Story = {
  args: { href: undefined },
};

export const MinimalFields: Story = {
  args: { role: undefined, dates: undefined },
};

export const ContainFit: Story = {
  args: {
    imageSrc: "/projects/lazarus-ai.png",
    imageFit: "contain",
    imagePlaceholderColor: "#f2f2f2",
  },
};
