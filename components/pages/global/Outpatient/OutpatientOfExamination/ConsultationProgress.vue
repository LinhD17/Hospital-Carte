<template>
  <div class="d-flex justify-space-between ml-10 mr-10">
    <div class="progress-chips">
      <v-chip small label variant="outlined" color="#1ea0dc">
        <h4 v-text="`受付済：`" />
      </v-chip>
      <v-chip small label variant="outlined" color="#1ea0dc">
        <h4 v-text="`予定：`" />
      </v-chip>
    </div>
    <div class="progress-chips">
      <v-chip small label variant="outlined" color="#1ea0dc">
        <h4 v-text="`予約：`" />
      </v-chip>
      <v-chip small label variant="outlined" color="#1ea0dc">
        <h4 v-text="`待ち：`" />
      </v-chip>
      <v-chip small label variant="outlined" color="#c0c0c0">
        <h4 v-text="`中待合：`" />
      </v-chip>
      <v-chip small label variant="outlined" color="#1ea0dc">
        <h4 v-text="`開始：`" />
      </v-chip>
      <v-chip small label  variant="outlined" color="#e6e6e6">
        <h4 v-text="`終了：`" />
      </v-chip>
      <v-chip small label variant="outlined" color="#c83232">
        <h4 v-text="`保留：`" />
      </v-chip>
    </div>
  </div>
</template>
  
  <script lang="ts">
</script>
  
  <style lang="scss" scoped>
.progress-chips {
  display: flex;
  gap: 5px;
}

</style>
  