import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProjectFilters } from "./ProjectFilters";

const sampleCategories = ["PubSec", "Social Networking", "Commercial", "Media & Publishing"] as const;

const meta = {
  title: "ui/ProjectFilters",
  component: ProjectFilters,
  args: {
    categories: sampleCategories,
    activeCategory: null,
    onSelectCategory: () => {},
  },
} satisfies Meta<typeof ProjectFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoneSelected: Story = {};

export const CategorySelected: Story = {
  args: { activeCategory: "Commercial" },
};

export const Interactive: Story = {
  render: function InteractiveFilters() {
    const [active, setActive] = useState<string | null>(null);
    return (
      <ProjectFilters
        categories={sampleCategories}
        activeCategory={active}
        onSelectCategory={setActive}
      />
    );
  },
};
