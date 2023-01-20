<template>
  <var-app-bar :title="title" title-position="center" color="#344568">
    <template #left v-if="leftArrow">
      <var-button
          color="transparent"
          text-color="#ffffff"
          round
          text
          @click="onClickLeftIcon"
      >
        <var-icon name="chevron-left" :size="24"/>
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

</style>
