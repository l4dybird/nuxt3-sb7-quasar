import type { Meta, StoryObj } from "@storybook/vue3";
import CBind from "../src/components/CBind.vue";

const meta = {
  title: "CBind",
  component: CBind,
  tags: ["autodocs"],
  argTypes: {
    "onUpdate:modelValue": { name: "update:modelValue" },
  },
} satisfies Meta<typeof CBind>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: "",
  },
};
