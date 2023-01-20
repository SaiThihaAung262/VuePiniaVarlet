<template>
  <div class="chagne-theme">
    <h3 class="title">Theme</h3>
    <!-- <van-switch v-model="mode" class="lang-switch">
      <template #node>
        <div class="icon-wrapper">
          <van-icon :name="mode ? 'like' : 'like-o'" />
        </div>
      </template>
    </van-switch> -->

    <var-checkbox
      unchecked-color="#e99eb4"
      checked-color="#f44336"
      v-model="mode"
    >
      <template #unchecked-icon>
        <var-icon name="heart-half-full" size="24px" />
      </template>
      <template #checked-icon>
        <var-icon name="heart" size="24px" />
      </template>
      <template #default> Current value: {{ mode }} </template>
    </var-checkbox>
  </div>
</template>
<!--<van-icon name="like-o" />-->
<script setup>
import { onMounted, ref, watch } from "vue";
import { useHomeStore } from "/@/store/useHomeStore.ts";

const homeStore = useHomeStore();
const mode = ref(
  localStorage.getItem("theme") == "dark" ? true : false || false
);

watch(
  () => mode.value,
  (newValue, oldValue) => {
    console.log("Here is switch theme", newValue);
    let htmlElement = document.documentElement;

    if (mode.value) {
      htmlElement.setAttribute("theme", "dark");
      homeStore.setTheme("dark");
    } else {
      htmlElement.setAttribute("theme", "light");
      homeStore.setTheme("light");
    }
  }
);

onMounted(() => {
  let bodyElement = document.body;
  bodyElement.classList.add("app-background");
});
</script>
<style lang="scss" scoped>
.chagne-theme {
  margin-top: px2rem(80);
  .title {
    font-weight: 300;
    text-align: center;
  }
  .lang-switch {
    background: blue;
    display: block;
    margin: px2rem(20) auto;
  }
}
</style>
