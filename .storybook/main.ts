import type { StorybookConfig } from "@storybook/types";

// TODO: unplugin-auto-import を追加する
const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: "@storybook/vue3-vite",
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
};

export default config;
