import type { Meta, StoryObj } from "@storybook/react-vite";

import {FeatureText} from "@/components/ui/FeatureText.tsx";

/**
 * Displays a card with header, content, and footer.
 */
const meta = {
  title: "ui/FeatureText",
  component: FeatureText,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    boldedText: "I’m usually a front-end dev for JavaScript web apps.",
    subText: "My work does skew towards ReactJS, but my foundation in vanilla JS allows me to pivot if needed.",
    isSubtextSmaller: false
  },
  render: (args) => (
    <FeatureText {...args} />
  ),
} satisfies Meta<typeof FeatureText>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the card.
 */
export const Default: Story = {};

export const SmallerSubtext: Story = {
  args: {
    boldedText: "I’m usually a front-end dev for JavaScript web apps.",
    subText: "My work does skew towards ReactJS, but my foundation in vanilla JS allows me to pivot if needed.",
    isSubtextSmaller: true
  }
};

export const NoSubtext: Story = {
  args: {
    boldedText: "I’m usually a front-end dev for JavaScript web apps.",
    subText: "",
    isSubtextSmaller: false
  }
};
