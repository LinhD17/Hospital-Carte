<template>
  <div class="well-known">
    <screen-header 
      page-title="周知・業務タスク" 
      title-icon="schedule.svg"
    />
    <div class="contents">
      <div class="contents-left">
        <important-report class="reports"></important-report>
        <thread-content class="threads"></thread-content>
      </div>
      <task-content class="tasks" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, } from '@nuxtjs/composition-api'
import TaskContent from './TaskContents/TaskContent.vue'
import ThreadContent from './Thread/ThreadContent.vue'
import ImportantReport from './ImportantReport/ImportantReport.vue'
import ScreenHeader from '~/components/general/screenHeader.vue'


export default defineComponent({
  components: { 
    ImportantReport,
    TaskContent,
    ThreadContent,
    ScreenHeader,
  },
  setup() {
    // const store = useStore()
    // console.log('defineComponent', store.getters.systemTime)
  },
})
</script>

<style lang="scss" scoped>
.well-known {
  width: 98.6%;
}
.contents {
  display: flex;
  height: calc(100vh - 135px);
}
.contents-left {
  width: 49.5%;
  margin: 0px 5px;
}
.reports {
  height: 49%;
  margin: 10px 5px 5px ;
  border: 1px solid white;
  border-radius: 8px;
  overflow: auto hidden;
}
.threads{
  background: white;
  margin: 7px 5px 0;
  height: 49%;
  border: 1px solid white;
  border-radius: 5px;
  overflow: auto hidden;
}
.tasks {
  width: 49.5%;
  background-color: white;
  margin:10px 10px 0px 0px;
  border: 1px solid white;
  border-radius: 8px;
}
</style>