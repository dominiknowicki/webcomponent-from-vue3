import { defineCustomElement } from "vue";
import MyCounter from "./my-counter.ce.vue";

export default function (tag = "my-counter", styleString = "") {
  const styles = [
    "span, button {font-size: 200%;} span { width: 4rem; display: inline-block; text-align: center;} button {width: 4rem;height: 4rem;border: none;border-radius: 10px;background-color: seagreen;color: white;}",
    styleString,
  ];
  const MyCounterCE = defineCustomElement({ ...MyCounter, styles });
  window.customElements.define(tag, MyCounterCE);
  console.log(tag + " customelement defined", window.customElements.get(tag));
}
