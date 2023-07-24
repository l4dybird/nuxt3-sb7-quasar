import type { Meta, StoryObj } from "@storybook/vue3";
import CBind from "../src/components/CBind.vue";

const meta: Meta<typeof CBind> = {
  title: "CBind",
  component: CBind,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CBind>;

export const Default: Story = {
  render: (_args) => ({
    components: { CBind },
    setup() {
      const value = ref("");
      return { value };
    },
    template: '<CBind v-model="value" />',
  }),
};

Default.parameters = { ...Default.parameters };
