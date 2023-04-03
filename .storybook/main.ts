import { InlineConfig, mergeConfig } from "vite";
import type { StorybookConfig } from "@storybook/types";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: "@storybook/vue3-vite",
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
};

export default config;
