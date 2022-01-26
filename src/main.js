import { createApp } from "vue";
import App from "./App.vue";
// import { defineCustomElement } from "vue";
// import wrap from '@vue/web-component-wrapper';
import MyCounter from "./components/my-counter.ce.vue";

// customElements.define("my-counter", defineCustomElement(MyCounter));
class wrapper extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    createApp(MyCounter).mount(this);
  }
}

customElements.define("my-counter", wrapper);
const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) =>
  tag.startsWith("my-") || ["my-counter"].includes(tag);
app.mount("#wrapper");
