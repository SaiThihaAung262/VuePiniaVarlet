<template>
  <div class="account">
    <h1>Hello I am account page</h1>
    <var-button type="danger">Danger Button</var-button>
    <ChangeTheme />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  reactive,
  onMounted,
  computed,
  watch,
} from "vue";

import ChangeTheme from "./Components/changeTheme.vue";

export default defineComponent({
  name: "home",
  layout: "home",
  components: {
    ChangeTheme,
  },

  setup() {
    const state = reactive({});

    onMounted(() => {});
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.account {
}
</style>
