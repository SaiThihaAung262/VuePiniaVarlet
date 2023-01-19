<template>
  <div class="page-tab">
    <router-view />
  </div>
  <var-bottom-navigation v-model:active="active" class="bottom-bar">
    <var-bottom-navigation-item
      :to="route.path"
      v-for="(route, index) in homeRouters"
      :key="index"
      :label="route.name"
      :icon="route.meta.icon"
      @click="handleClickTabs(route.path)"
    />
  </var-bottom-navigation>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { homeRouters } from "../router/modules/home";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const router = useRouter();
const activeRoute = computed(() => {
  return router.currentRoute.value.path;
});

const active = computed({
  get() {
    return homeRouters.findIndex((item) => item.path === activeRoute.value);
  },
  set() {},
});

const handleClickTabs = (path: string) => {
  router.push(path);
};
onMounted(() => {});
</script>

<style lang="scss" scoped>
.page-tab {
  position: relative;
}
.bottom-bar {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}
.menu-icon {
  color: rgb(53, 84, 134);
}
</style>
