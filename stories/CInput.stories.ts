import { userEvent, within } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/vue3";
import CInput from "../src/components/CInput.vue";

const meta = {
  title: "CInput",
  component: CInput,
  tags: ["autodocs"],
  argTypes: {
    "onUpdate:modelValue": { name: "update:modelValue" },
  },
} satisfies Meta<typeof CInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const Input = canvas.getByLabelText("Input", { selector: "input" });

    await userEvent.type(Input, "test");
    await userEvent.clear(Input);
  },
};
