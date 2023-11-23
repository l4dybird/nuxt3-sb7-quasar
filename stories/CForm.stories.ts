import { expect, fireEvent, waitFor, within } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/vue3";
import CForm from "../src/components/CForm.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: "CForm",
  component: CForm,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof CForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await fireEvent.click(canvas.getByText("Submit"));

    await waitFor(() => {
      const validationMessage = canvas.getByText("Please type something");
      expect(validationMessage.innerText).toBe("Please type something");
    });
  },
};
