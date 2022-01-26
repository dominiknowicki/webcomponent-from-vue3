<template>
  <div>
    <button @click="dec">
      -
    </button>
    <span>{{ state.count }}</span>
    <button @click="inc">
      +
    </button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    function inc() {
      state.count++;
    }

    function dec() {
      state.count--;
    }

    return {
      state,
      inc,
      dec,
    };
  },
};
</script>

<style>
span,
button {
  font-size: 200%;
}

span {
  width: 4rem;
  display: inline-block;
  text-align: center;
}

button {
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 10px;
  background-color: seagreen;
  color: white;
}
</style>