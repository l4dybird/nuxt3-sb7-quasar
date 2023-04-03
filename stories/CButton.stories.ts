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
Primary.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);

  // HACK: Props に対する型エラーの解消方法を検討する
  expect((await canvas.findAllByRole("button"))[0].innerHTML).toContain(
    args.label
  );
};
