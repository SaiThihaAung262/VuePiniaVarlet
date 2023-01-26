<template>
    <div class="page-tab">
        <router-view/>
    </div>
    <var-bottom-navigation v-model:active="active" :fixed="true" active-color="#344568" class="bottom-bar"
                           inactive-color="#969696">
        <var-bottom-navigation-item
                v-for="(route, index) in homeRouters"
                :key="index"
                :to="route.path"
                @click="handleClickTabs(route.path)"
        >
            <template #default>
                {{ t(route.meta.title) }}
            </template>
            <template #icon>
                <var-icon :name="route.meta.icon"/>
            </template>
        </var-bottom-navigation-item>
    </var-bottom-navigation>
</template>

<script lang="ts" setup>
import {computed, onMounted} from "vue";
import {homeRouters} from "../router/modules/home";
import {useRouter} from "vue-router";
import {useI18n} from "vue-i18n";

const {t} = useI18n();
const router = useRouter();
const activeRoute = computed(() => {
    return router.currentRoute.value.path;
});

const active = computed({
    get() {
        return homeRouters.findIndex((item) => item.path === activeRoute.value);
    },
    set() {
    },
});

const handleClickTabs = (path: string) => {
    router.push(path);
};
onMounted(() => {
});
</script>

<style lang="scss" scoped>
.page-tab {
  position: relative;
  //overflow: scroll;
}

.bottom-bar {
  --bottom-navigation-background-color: var(--home-bg);
  --bottom-navigation-item-active-background-color: var(--home-bg);
}

.menu-icon {
  color: rgb(53, 84, 134);
}
</style>
