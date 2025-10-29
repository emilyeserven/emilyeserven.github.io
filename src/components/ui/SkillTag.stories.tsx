import type { Meta, StoryObj } from '@storybook/react-vite';

import { SkillTag } from './SkillTag';

const meta = {
    title: "ui/SkillTag",
  component: SkillTag,
    args: {
        tagName: "tag"
    }
} satisfies Meta<typeof SkillTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const ReallyLongTag: Story = {
    args: {
        tagName: "Wowee_what_a_super_SUPER_long_tag_name!",
    }
};