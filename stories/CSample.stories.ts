import type { Meta, StoryObj } from "@storybook/vue3";
import CSample from "../src/components/CSample.vue";

const meta = {
  title: "CSample",
  component: CSample,
  tags: ["autodocs"],
} satisfies Meta<typeof CSample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "sample",
  },
};
