import type { Meta, StoryObj } from "@storybook/vue3";
import CSample from "../components/CSample.vue";

const meta = {
  title: "CSample",
  component: CSample,
};

export default meta;
type Story = StoryObj<typeof CSample>;

export const Default: Story = {
  render: (args) => ({
    components: { CSample },
    setup() {
      return { args };
    },
    template: '<CSample v-bind="args" />',
  }),
  args: {
    label: "CSample",
  },
};
