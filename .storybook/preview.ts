import "quasar/dist/quasar.prod.css";
import "@quasar/extras/material-icons/material-icons.css";

import { setup } from "@storybook/vue3";
import { Quasar } from "quasar";
import * as components from "quasar";
import {
  ClosePopup as vClosePopup,
  Intersection as vIntersection,
  Morph as vMorph,
  Mutation as vMutation,
  Ripple as vRipple,
  Scroll as vScroll,
  ScrollFire as vScrollFire,
  TouchHold as vTouchHold,
  TouchPan as vTouchPan,
  TouchRepeat as vTouchRepeat,
  TouchSwipe as vTouchSwipe,
} from "quasar";

setup((app) => {
  app.use(Quasar, {
    components,
    directives: {
      vClosePopup,
      vIntersection,
      vMorph,
      vMutation,
      vRipple,
      vScroll,
      vScrollFire,
      vTouchHold,
      vTouchPan,
      vTouchRepeat,
      vTouchSwipe,
    },
    plugins: {},
    iconSet: undefined,
    config: {},
    lang: undefined,
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
