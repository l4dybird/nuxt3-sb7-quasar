import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/vue3";
import CButton from "../components/CButton.vue";

const meta = {
  title: "CButton",
  component: CButton,
};

export default meta;
type Story = StoryObj<typeof CButton>;

export const Primary: Story = {
  render: (args) => ({
    components: { CButton },
    setup() {
      return { args };
    },
    template: '<CButton v-bind="args" />',
  }),
  args: {
    label: "primary",
  },
};

Primary.parameters = { ...Primary.parameters };
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  expect(canvas.getByText("primary").textContent).toBe("primary");
};
