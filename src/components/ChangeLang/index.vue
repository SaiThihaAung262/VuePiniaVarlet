<template>
  <div class="change-lang-con">
    <h2 class="title">Change Language</h2>
    <div class="languages-con">
      <var-radio-group v-model="state.language" class="lang-group">
        <var-radio checked-value="en">{{ t("common.english") }}</var-radio>
        <var-radio checked-value="cn">{{ t("common.chinese") }}</var-radio>
      </var-radio-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { changeLang } from "../../locales/i18n";
import { reactive, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useHomeStore } from "../../store/useHomeStore";

const { t } = useI18n();
let homeStore = useHomeStore();

const state = reactive({
  language: localStorage.getItem("lang") || "en",
});

watch(
  () => state.language,
  (newValue, oldValue) => {
    console.log("Here is state.changeLang", state.language);
    changeLang(state.language as "en" | "cn");
    homeStore.setLanguage(state.language);
  }
);
</script>
<style lang="scss" scoped>
.change-lang-con {
  margin-top: px2rem(50);
  .title {
    font-weight: 300;
    font-size: px2rem(50);
    text-align: center;
  }
  .languages-con {
    display: flex;
    justify-content: center;
  }
}
</style>
