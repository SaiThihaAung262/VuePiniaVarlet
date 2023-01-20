<template>
  <div class="account">
    <h1>Hello I am account page</h1>
    <change-theme/>
    <change-lang/>
    <br/>
    <var-button loading type="danger">Danger Button</var-button>
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
import ChangeLang from "./../../components/ChangeLang/index.vue";
import ChangeTheme from "./../../components/ChangeTheme/index.vue";

export default defineComponent({
  name: "home",
  layout: "home",
  components: {
    ChangeTheme, ChangeLang
  },

  setup() {
    const state = reactive({});

    onMounted(() => {
    });
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
