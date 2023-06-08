<!-- <template>
    <v-row
      style="min-height: 40px;"
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
            width="100%"
            class="mx-auto bg-secondary"
          ></v-card>
        </v-expand-transition>
      </v-col>
    </v-row>
  </template>
  
  <script>
    export default {
      data: () => ({
        expand: false,
      }),
    }
  </script> -->


  <template>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-title class="mt-5">
        Top western road trips
      </v-card-title>
  
      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>
  
      <v-card-actions>
        <VBtn
          color="orange-lighten-2"
          variant="text"
        >
          Explore
      </VBtn>
  
        <v-spacer></v-spacer>
  
        <VBtn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></VBtn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>

      <button @click="show = !show">Toggle</button>
      <Transition>
        <p v-if="show">Hello</p>
      </Transition>
    </v-card>
  </template>
  
  <script>
    export default {
      data: () => ({
        show: false,
      }),
    }
  </script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>