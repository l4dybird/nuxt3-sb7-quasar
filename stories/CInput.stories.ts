import { ref } from "vue";
import { userEvent, within } from "@storybook/testing-library";
import type { Meta, StoryObj } from "@storybook/vue3";
import CInput from "../components/CInput.vue";

const meta: Meta<typeof CInput> = {
  title: "CInput",
  component: CInput,
};

export default meta;
type Story = StoryObj<typeof CInput>;

export const Primary: Story = {
  render: (args) => ({
    components: { CInput },
    setup() {
      const text = ref("");
      return { args, text };
    },
    template: '<CInput v-model="text" />',
  }),
};

Primary.parameters = { ...Primary.parameters };
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const Input = canvas.getByLabelText("Input", { selector: "input" });

  await userEvent.type(Input, "test");
  await userEvent.clear(Input);
};
