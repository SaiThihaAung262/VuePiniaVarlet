<template>
  <NavBar :left-arrow="false" :title="t('tabbar.account')" />
  <div class="account">
    <var-snackbar v-model:show="showSnackbar"></var-snackbar>
    <change-theme />
    <change-lang />
    <br />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import ChangeLang from "./../../components/ChangeLang/index.vue";
import ChangeTheme from "./../../components/ChangeTheme/index.vue";
import NavBar from "./../../components/NavBar/index.vue";
import { Snackbar } from "@varlet/ui";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "home",
  layout: "home",
  components: {
    ChangeTheme,
    ChangeLang,
    Snackbar,
    NavBar,
  },

  setup() {
    const { t } = useI18n();
    const state = reactive({
      showSnackbar: false,
    });

    onMounted(() => {});
    return {
      ...toRefs(state),
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.account {
  padding-top: px2rem(100);
}
</style>
