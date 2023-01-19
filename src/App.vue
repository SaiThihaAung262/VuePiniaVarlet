<template>
  <router-view #="{ Component }">
    <component :is="Component"/>
  </router-view>
</template>

<script setup lang="ts">
import {onMounted} from "vue";

const initialTheme = () => {
  let bodyElement = document.body;
  bodyElement.classList.add("app-background");
  let htmlElement = document.documentElement;
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    htmlElement.setAttribute("theme", "dark");
  } else {
    htmlElement.setAttribute("theme", "light");
  }
}

onMounted(() => {
  initialTheme()
})
</script>
<style lang="scss">
@import "./styles/index.scss";
</style>
