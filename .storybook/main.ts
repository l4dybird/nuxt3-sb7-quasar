import { mergeConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

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
    config.plugins = config.plugins ?? [];
    config.plugins.push(
      AutoImport({
        dts: false,
        imports: ["vue", "vue-router"],
      })
    );
    config.plugins.push(
      Components({
        dts: false,
        extensions: ["vue"],
        include: [/\.vue$/, /\.vue\?vue/],
      })
    );
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
