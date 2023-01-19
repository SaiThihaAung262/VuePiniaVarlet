<template>
  <div class="account">
    <h1>Hello I am account page</h1>
    <var-button type="danger">Danger Button</var-button>
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

export default defineComponent({
  name: "home",
  layout: "home",
  components: {},

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
