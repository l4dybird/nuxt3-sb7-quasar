import "quasar/dist/quasar.prod.css";
import "@quasar/extras/material-icons/material-icons.css";

import { setup } from "@storybook/vue3";
import { Quasar } from "quasar";
import * as components from "quasar";
import * as directives from "quasar";

setup((app) => {
  app.use(Quasar, {
    config: {},
    components,
    directives,
  });
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // docs: {
  //   story: {
  //     inline: false,
  //   },
  // },
};
