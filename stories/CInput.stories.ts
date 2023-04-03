import { ref } from "vue";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/vue3";
import CInput from "../components/CInput.vue";

const meta = {
  title: "CInput",
  component: CInput,
};

export default meta;
type Story = StoryObj<typeof CInput>;

export const Primary: Story = {
  render: (args) => ({
    components: { CInput },
    setup() {
      return { args };
    },
    template: '<CInput v-bind="args" />',
  }),
  args: {
    modelValue: "primary",
  },
};

Primary.parameters = { ...Primary.parameters };
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const Input = canvas.getByLabelText("Input", { selector: "input" });

  await userEvent.type(Input, "test");
  await userEvent.clear(Input);
};
