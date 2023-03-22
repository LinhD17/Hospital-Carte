<template>
  <div>
    <global-base-layout
      page-title="周知・業務タスク" 
      title-icon="schedule.svg"
    />
    <div class="contents">
      <div class="contents-left">
        <important-report class="reports"></important-report>
        <thread-content class="bulletin-board"></thread-content>
      </div>
      <task-content class="contents-right" />
    </div>
  </div>
</template>

<script>
import globalBaseLayout from '../../general/globalBaseLayout.vue'
import TaskContent from './TaskContents/TaskContent.vue'
import ThreadContent from './Thread/ThreadContent.vue'
import ImportantReport from '~/components/global/scheduleContact/wellKnownAndTask/ImportantReport/ImportantReport.vue'

export default {
  components: { 
    globalBaseLayout, 
    ImportantReport,
    TaskContent,
    ThreadContent 
  },
}
</script>

<style lang="scss" scoped>
.contents {
  display: flex;
  height: calc(100vh - 150px);
}
.contents-left {
  width: 49.5%;
  margin: 0px 5px;
}
.reports {
  height: 49%;
  margin: 0 5px 5px ;
  border: 1px solid white;
  border-radius: 8px;
}
.bulletin-board {
  background: white;
  margin: 7px 5px 0;
  height: 49%;
  border: 1px solid white;
  border-radius: 5px;
}
.contents-right {
  width: 49.5%;
  background-color: white;
  margin: 0px 10px 10px 0px;
  border: 1px solid white;
  border-radius: 8px;
}
</style>