<!-- <script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <button
    class="bg-blue rounded mt-2"
    @click="show = !show"
  >Toggle
  </button>
  <Transition>
    <p v-if="show">hello</p>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style> -->

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

    <div class="mx-4 hidden-sm-and-down"></div>

    <v-col class="shrink">
      <v-btn
        class="ma-2"
        color="secondary"
        @click="expand2 = !expand2"
      >
        Expand X Transition
      </v-btn>

      <v-expand-x-transition>
        <v-card
          v-show="expand2"
          height="100"
          width="100"
          class="mx-auto bg-secondary"
        ></v-card>
      </v-expand-x-transition>
    </v-col>
  </v-row>
</template>

<script setup>
  const expand = ref(false)
  const expand2 = ref(false)
</script>

<script>
  export default {
    data: () => ({
      expand: false,
      expand2: false,
    }),
  }
</script>