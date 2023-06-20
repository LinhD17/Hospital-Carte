<template>
  <v-row
    justify="center"

    style="min-height: 60px;"
  >
    <v-col class="shrink">
      <v-btn
        class="ma-2"
        color="primary"
        @click="expand = !expand"
      >
        Expand Transition
      </v-btn>

      <v-expand-transition>
        <v-card
          v-show="expand"
          height="100"
          width="100"
          class="mx-auto bg-secondary"
        ></v-card>
      </v-expand-transition>
    </v-col>
  </v-row>
</template>

<script setup>
  const expand = ref(false)
</script>

<script>
  export default {
    data: () => ({
      expand: false,
      expand2: false,
    }),
  }
</script>