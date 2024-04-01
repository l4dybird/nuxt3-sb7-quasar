import { expect, within } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/vue3";
import CButton from "../src/components/CButton.vue";

const meta = {
  title: "CButton",
  component: CButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: { name: "click" },
  },
} satisfies Meta<typeof CButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "primary",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    expect((await canvas.findAllByRole("button"))[0].innerHTML).toContain(
      args.label
    );
  },
};
