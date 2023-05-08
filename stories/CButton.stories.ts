import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/vue3";
import CButton from "../components/CButton.vue";

const meta: Meta<typeof CButton> = {
  title: "CButton",
  component: CButton,
};

export default meta;
type Story = StoryObj<typeof CButton>;

export const Default: Story = {
  render: (args) => ({
    components: { CButton },
    emits: ["click"],
    setup() {
      return { args };
    },
    template: '<CButton v-bind="args" />',
  }),
  args: {
    label: "primary",
  },
  argTypes: {
    onClick: { action: "onClick" },
  },
};

Default.parameters = { ...Default.parameters };
Default.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);

  expect((await canvas.findAllByRole("button"))[0].innerHTML).toContain(
    args.label
  );
};
