<template>
  <div class="home">
    <NavBar :left-arrow="false" :title="t('tabbar.home')">
    </NavBar>
    <br/>
    <div v-if="loading">
      <var-skeleton :loading="loading">Loading Data</var-skeleton>
    </div>
    <div v-else>
      <div v-for="(item, index) in articleList" :key="index">
        <p v-html="item.content"/>
        <br/>
      </div>
      <div>total article is : {{ totalArticle }}</div>
    </div>
    <br/>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs} from "vue";
import {useHomeStore} from "../../store/useHomeStore";
import {ArticleInfo} from "../../types/index";
import NavBar from "./../../components/NavBar/index.vue"
import {useI18n} from "vue-i18n";

export default defineComponent({
  name: "home",
  layout: "home",
  components: {NavBar},

  setup() {
    const {t} = useI18n()
    let homeStore = useHomeStore();
    const state = reactive({
      articleList: [] as ArticleInfo[],
      totalArticle: 0,
      loading: false
    });

    const setStyle = () => {
      LoadingBar.mergeConfig({
        top: "0",
        color: "green",
        height: "5",
      })

    }

    const getHomeArticleList = () => {
      LoadingBar.start()
      state.loading = true
      homeStore.getArticleData().then((res) => {
        state.articleList = res.list;
        state.totalArticle = res.total;
        LoadingBar.finish()
        state.loading = false

      });
    };

    onMounted(() => {
      setStyle()
      getHomeArticleList();
    });
    return {
      ...toRefs(state), t
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  h1 {
    color: rgb(255, 255, 255);
    font-size: px2rem(50);
    background: rgb(154, 154, 219);
    width: 100%;
  }
}
</style>
