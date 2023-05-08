import { mergeConfig } from "vite";

export default {
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
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      define: {
        __QUASAR_SSR_SERVER__: false,
        __QUASAR_SSR_CLIENT__: false,
      },
    });
  },
};
