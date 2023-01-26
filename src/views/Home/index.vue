<template>
    <div class="home">
        <NavBar :left-arrow="false" :title="t('tabbar.home')"></NavBar>
        <br/>
        <br/>
        <br/>
        <br/>

        <div v-if="loading">
            <var-skeleton :loading="loading">Loading Data</var-skeleton>
        </div>
        <div v-else class="my-article-con">
            <div v-for="(item, index) in articleList" :key="index">
                <p v-html="item.content"/>
                <br/>
            </div>
            <div>total article is : {{ totalArticle }}</div>
        </div>
        <br/>
        <!--        <var-space :size="[20, 20]">-->
        <!--            <var-button>Button1</var-button>-->
        <!--            <var-button>Button2</var-button>-->
        <!--            <var-button>Button3</var-button>-->
        <!--            <var-button>Button4</var-button>-->
        <!--            <var-button>Button5</var-button>-->
        <!--            <var-button>Button6</var-button>-->
        <!--        </var-space>-->
        <!--        <var-row>-->
        <!--            <var-col :span="8" style="text-align: center">span: 8</var-col>-->
        <!--            <var-col :span="8">span: 8</var-col>-->
        <!--            <var-col :span="8">span: 8</var-col>-->
        <!--            <var-col :span="8">span: 8</var-col>-->
        <!--            <var-col :span="8">span: 8</var-col>-->
        <!--            <var-col :span="8">span: 8</var-col>-->
        <!--        </var-row>-->

        <var-list
                v-model:loading="loading"
                :finished="finished"
                finished-text="No-more"
                loading-text="Loading"
                @load="load"

        >
            <var-cell v-for="item in list" :key="item">
                List Item: {{ item }}
            </var-cell>
        </var-list>
    </div>
</template>

<script lang="ts">
import type {Ref} from 'vue'
import {defineComponent, onMounted, reactive, ref, toRefs} from "vue";
import {useHomeStore} from "../../store/useHomeStore";
import {ArticleInfo} from "../../types/index";
import NavBar from "./../../components/NavBar/index.vue";
import {useI18n} from "vue-i18n";

export default defineComponent({
    name: "home",
    layout: "home",
    components: {NavBar},

    setup() {
        const {t} = useI18n();
        let homeStore = useHomeStore();
        const state = reactive({
            articleList: [] as ArticleInfo[],
            totalArticle: 0,
            loading: false,
        });

        const setStyle = () => {
            LoadingBar.mergeConfig({
                top: "0",
                color: "green",
                height: "5",
            });
        };
        const getHomeArticleList = () => {
            LoadingBar.start();
            state.loading = true;
            homeStore.getArticleData().then((res) => {
                state.articleList = res.list;
                state.totalArticle = res.total;
                LoadingBar.finish();
                state.loading = false;
            });
        };

        const loading: Ref<boolean> = ref(false)
        const finished: Ref<boolean> = ref(false)
        const list: Ref<any[]> = ref([])

        const load = () => {
            setTimeout(() => {
                for (let i = 0; i < 20; i++) {
                    list.value.push(list.value.length + 1)
                }

                loading.value = false

                if (list.value.length >= 60) {
                    finished.value = true
                }
            }, 1000)
        }

        onMounted(() => {
            setStyle();
            getHomeArticleList();
        });
        return {
            ...toRefs(state),
            t,
            load,
            loading,
            finished,
            list,
        };
    },
});
</script>

<style lang="scss" scoped>
.home {
  //overflow: scroll;
  padding-bottom: px2rem(100);

  h1 {
    color: rgb(255, 255, 255);
    font-size: px2rem(50);
    background: rgb(154, 154, 219);
    width: 100%;
  }

  .var-col {
    justify-content: center;
    align-items: center;
    height: 36px;
    margin-top: 10px;
    color: #fff;
    text-align: center;
    background-clip: content-box !important;
    background: #3a7afe;
  }

  .my-article-con {
    padding: px2rem(10);
    //transform: translateX(-150%);
    transform: scale(0);
    animation: my-article-animate 0.7s forwards;
  }

  @keyframes my-article-animate {
    from {
      //transform: translateX(-150%);
      transform: scale(0);
    }
    to {
      //transform: translateX(0%);
      transform: scale(1);
    }
  }
}
</style>
