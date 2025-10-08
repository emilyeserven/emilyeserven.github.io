import type { Meta, StoryObj } from '@storybook/react-vite';

import { SkillTag } from './SkillTag';

const meta = {
    title: "ui/SkillTag",
  component: SkillTag,
} satisfies Meta<typeof SkillTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};