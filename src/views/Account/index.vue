<template>
  <div class="account">
    <h1>Hello I am account page</h1>
    <var-button type="danger">Danger Button</var-button>
    <change-theme/>
    <change-lang/>
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
import ChangeLang from "./Components/ChangeLang.vue";
import ChangeTheme from "./Components/changeTheme.vue";

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
