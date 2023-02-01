<template>
  <div class="home">
    <NavBar :left-arrow="false" :title="t('tabbar.home')"></NavBar>
    <div class="search-container">
      <div class="search">
        <var-input
          placeholder="Please enter text to search!"
          v-model="form.question"
          class="search-input"
        />
        <var-button
          type="primary"
          class="search-btn"
          @click="searchQuestion"
          round
        >
          <var-icon name="magnify-plus-outline" />
        </var-button>
      </div>

      <div v-if="loading">
        <var-skeleton :loading="loading">Loading</var-skeleton>
      </div>

      <div class="question-con" v-else>
        <p class="answer">{{ answer }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Ref } from "vue";
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import { useHomeStore } from "../../store/useHomeStore";
import { ArticleInfo } from "../../types/index";
import NavBar from "./../../components/NavBar/index.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "home",
  layout: "home",
  components: { NavBar },

  setup() {
    const { t } = useI18n();
    let homeStore = useHomeStore();
    const state = reactive({
      articleList: [] as ArticleInfo[],
      totalArticle: 0,
      loading: false,
      form: {
        question: "",
      },
      answer: "",
    });

    const setStyle = () => {
      LoadingBar.mergeConfig({
        top: "0",
        color: "green",
        height: "5",
      });
    };

    const searchQuestion = () => {
      LoadingBar.start();
      state.loading = true;
      homeStore.searchQuestion(state.form).then((res) => {
        console.log(res);
        if (res.err_code == 0) {
          state.answer = res.data;
          state.loading = false;
          LoadingBar.finish();
        }
      });
    };

    onMounted(() => {
      setStyle();
    });
    return {
      ...toRefs(state),
      t,
      searchQuestion,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  //overflow: scroll;
  padding-bottom: px2rem(100);

  .search-container {
    width: 80%;
    margin: 0 auto;
    margin-top: px2rem(140);
    .search {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .search-input {
        width: 80%;
      }
      .search-btn {
        width: px2rem(80);
        height: px2rem(80);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .question-con {
      width: 100%;
      margin-top: px2rem(30);
      .answer {
        text-align: justify;
      }
    }
  }
}
</style>
