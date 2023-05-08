import { fireEvent, within, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/vue3";
import CForm from "../components/CForm.vue";

const meta: Meta<typeof CForm> = {
  title: "CForm",
  component: CForm,
};

export default meta;
type Story = StoryObj<typeof CForm>;

export const ValidStubmit: Story = {
  render: (args) => ({
    components: { CForm },
    setup() {
      return { args };
    },
    template: '<CForm v-bind="args" />',
  }),
};

ValidStubmit.parameters = { ...ValidStubmit.parameters };
ValidStubmit.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await fireEvent.click(canvas.getByText("Submit"));

  await waitFor(() => {
    const validationMessage = canvas.getByText("Please type something");
    expect(validationMessage.innerText).toBe("Please type something");
  });
};
