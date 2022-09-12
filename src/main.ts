import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App)
  .use(store)
  /*.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})
.use(VueTypedJs)*/
  .use(router);

app.mount("#app");
