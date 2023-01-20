<template>
  <div class="account">
    <var-snackbar v-model:show="showSnackbar"></var-snackbar>
    <h1>Hello I am account page</h1>
    <change-theme/>
    <change-lang/>
    <br/>
    <var-button type="danger" @click="showMySnackbar">Danger Button</var-button>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs,} from "vue";
import ChangeLang from "./../../components/ChangeLang/index.vue";
import ChangeTheme from "./../../components/ChangeTheme/index.vue";
import {Snackbar} from '@varlet/ui'

export default defineComponent({
  name: "home",
  layout: "home",
  components: {
    ChangeTheme, ChangeLang, Snackbar
  },

  setup() {
    const state = reactive({
      showSnackbar: false
    });

    const showMySnackbar = () => {
      // state.showSnackbar = true
      Snackbar("Hello, I'm a snackbar")
      console.log("Here show")
    }

    onMounted(() => {
    });
    return {
      ...toRefs(state), showMySnackbar
    };
  },
});
</script>

<style lang="scss" scoped>
.account {
}
</style>
