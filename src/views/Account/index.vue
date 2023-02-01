<template>
  <div class="account">
    <var-snackbar v-model:show="showSnackbar"></var-snackbar>
    <h1>Hello I am account page</h1>
    <change-theme />
    <change-lang />
    <br />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import ChangeLang from "./../../components/ChangeLang/index.vue";
import ChangeTheme from "./../../components/ChangeTheme/index.vue";
import { Snackbar } from "@varlet/ui";

export default defineComponent({
  name: "home",
  layout: "home",
  components: {
    ChangeTheme,
    ChangeLang,
    Snackbar,
  },

  setup() {
    const state = reactive({
      showSnackbar: false,
    });

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
