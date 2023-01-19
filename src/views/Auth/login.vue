<template>
  <div class="login">
    <div class="login-con">
      <van-button type="primary" size="small" @click="loginHandler">
        Login
      </van-button>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs, reactive, onMounted, computed} from "vue";
import {useHomeStore} from "../../store/useHomeStore";
import {LoginData} from "../../types/index";
import {useUserStore} from "../../store/useUserStore";

export default defineComponent({
  name: "login",
  layout: "login",
  components: {},

  setup() {
    let homeStore = useHomeStore();
    let userStore = useUserStore();
    const state = reactive({});


    const loginHandler = () => {
      let data: LoginData = {
        address_type: "ETH",
        wallet_address: "0x893e2765c5c63e60f297c2ad3420f8c23c7b8ce5",
      };

      userStore.userLogin(data).then((res) => {
        console.log("Here is res from home : ", res);
      });
    };

    onMounted(() => {
    });
    return {
      ...toRefs(state),
      loginHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  position: relative;

  .login-con {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
