import { userEvent, within } from "@storybook/testing-library";
import type { Meta, StoryObj } from "@storybook/vue3";
import CInput from "../components/CInput.vue";

const meta: Meta<typeof CInput> = {
  title: "CInput",
  component: CInput,
};

export default meta;
type Story = StoryObj<typeof CInput>;

export const Default: Story = {
  render: (args) => ({
    components: { CInput },
    setup() {
      return { args };
    },
    template: '<CInput v-bind="args" />',
  }),
};

Default.parameters = { ...Default.parameters };
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const Input = canvas.getByLabelText("Input", { selector: "input" });

  await userEvent.type(Input, "test");
  await userEvent.clear(Input);
};
