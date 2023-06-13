<template>
    <NuxtLayout name="karte">
        <div class="karte-wrap">
            <!-- サイドバー -->
            <PagesKarteKarteBarTreatmentHistoryBar />
            <PagesKarteKarteBarStickyNote />

            <!-- - 患者情報、過去記事  -->
            <div class="karte-content karte-content--left">
                <!-- <div
                    class="karte-content-in patientInformations-wrap"
                    :class="leftAreaMode === 0 
                        ? 'half-screen' : leftAreaMode === 2 
                        ? 'minus-screen' : 'full-screen'
                    " 
                >
                <PagesKartePatientInformations/>
                </div>
                <div
                    class="karte-content-in pastArticles-wrap"
                    :class="leftAreaMode === 0 
                        ? 'half-screen' : leftAreaMode === 1 
                        ? 'minus-screen' : 'full-screen'
                    " 
                >
                    <PagesKartePastArticlesParent/>
                </div> -->

                <div
                    class="karte-content-in patientInformations-wrap"
                >
                     <PagesKartePatientInformations/>
                </div>
                <div
                    class="karte-content-in pastArticles-wrap"
                >
                    <PagesKartePastArticlesParent/>
                </div>
            </div>

            <!-- オーダー、記事作成 -->
            <div class="karte-content karte-content--right">
                <div class="karte-content-in registerAboutPatient-wrap full-screen">
                    <PagesKarteRegisterAboutPatient />
                </div>
            </div> 
        </div>
    </NuxtLayout>
</template>

<script setup>
    import { computed } from 'vue'
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex'

    definePageMeta({ 
        //middleware: ['guard/auth'],
    })
    useHead({
        title: 'WarokuHKカルテ_Replica',
    })
    const store = useStore()
    const router = useRouter()
    // const barAreaMode = computed(() => store.getters['karte/barAreaMode'])
    // const leftAreaMode = computed(() => store.getters['karte/leftAreaMode'])
    // const articleAreaMode = computed(() => store.getters['karte/articleAreaMode'])

    //login 

</script>

<style lang="scss" scoped>
.karte-wrap {
    display: flex;
    height: calc(100vh - 98px);
    position: relative;
    margin-left: 54px;
    transition: 0.3s;
    &.close-treatment-history-bar {
    margin-left: 0;
    transition: 0.3s;
    }
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -1px;
        display: block;
        width: 1px;
        height: 100%;
        background-color: #51565b;
        z-index: 1;
    }
}
.karte-content {
  height: 100%;
  width: 50%;
  &--left {
    border-right: solid 1px #51565b;
  }
}
.karte-content-in {
  height: 50%;
  background-color: #ffffff;
  overflow: auto;
  transition: 0.3s;
  &.patientInformations-wrap {
    height: calc(42vh - 44px);
    transition: 0.3s;
    &.full-screen {
      height: calc(100% - 46px);
      transition: 0.3s;
    }
    &.half-screen {
      transition: 0.3s;
    }
    &.minus-screen {
      height: 0;
      transition: 0.3s;
    }
  }
  &.pastArticles-wrap {
    height: calc(58vh - 54px);
    border-top: solid 1px #51565b;
    transition: 0.3s;

    &.full-screen {
      height: calc(100vh - 98px);
      border-top: solid 0;
      transition: 0.3s;
    }
    &.minus-screen {
      height: 46px;
      width: 50%;
      position: absolute;
      bottom: 0;
      //      border-right: 1px solid #51565b;
      overflow: hidden;
    }
  }
  &.registerAboutPatient-wrap {
    position: relative;
    &.full-screen {
      height: 100%;
      transition: 0.3s;
      &.after-active {
        height: calc(100% - 46px) !important;
      }
    }
    &.half-screen {
      transition: 0.3s;
    }
    &.minus-screen {
      height: 0;
      transition: 0.3s;
    }
  }
  &.articleWriting-wrap {
    border-top: solid 1px #51565b;
    transition: 0.3s;
    &.full-screen {
      //height: calc(100vh - 98px);
      border-top: 0;
      transition: 0.3s;
      overflow: auto;
    }
    &.half-screen {
      transition: 0.3s;
    }
    &.minus-screen {
      height: 0;
      width: 50%;
      position: absolute;
      bottom: 0;
      overflow: auto;
      border-top: 0;
      transition: 0.3s;
      &.after-active {
        height: 46px;
      }
      &::v-deep .article-writing-footer {
        display: none;
        transition: 0.3s;
      }
    }
  }
}

</style>