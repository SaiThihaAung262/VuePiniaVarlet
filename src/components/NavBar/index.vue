<template>
    <var-app-bar :title="title" class="nav-bar" color="#344568" title-position="center">
        <template v-if="leftArrow" #left>
            <var-button
                    color="transparent"
                    round
                    text
                    text-color="#ffffff"
                    @click="onClickLeftIcon"
            >
                <var-icon :size="24" name="chevron-left"/>
            </var-button>
        </template>
        <template #right>
            <slot></slot>
        </template>
    </var-app-bar>
</template>

<script setup>
import {useRouter} from "vue-router";

const props = defineProps({
    title: {
        default: "",
        type: String,
    },
    leftArrow: {
        default: true,
        type: Boolean,
    },
    rightText: {
        default: "",
        type: String,
    },
    returnTo: {
        default: "",
        type: String
    }
});
const router = useRouter();
const emit = defineEmits(["onClickLeftIcon", "onClickRight"]);
const onClickLeftIcon = () => {
    if (props.returnTo !== "") {
        router.push(props.returnTo);
    } else {
        window.history.go(-1);
    }
    window.history.go(-1);
    emit("onClickLeftIcon");
};
// const onClickRight = () => {
//   emit("onClickRight");
// };
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

}
</style>
