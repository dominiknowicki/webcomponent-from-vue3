import { createApp } from "vue";
import App from "./App.vue";
import registerMyCounterCustomElement from "./components/myCounter.js";

registerMyCounterCustomElement();

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) =>
  tag.startsWith("my-") || ["my-counter"].includes(tag);
app.mount("#wrapper");
