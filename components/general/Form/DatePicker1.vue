<template>
  <v-container>
    <v-menu
      ref="menu1"
      v-model="menu1"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-on="on"
          v-model="dateFormatted"
          v-bind="attrs"
          dense
          readonly
          clearable
          variant="solo"
          hide-details
          persistent-hint
          prepend-icon="mdi-calendar"
          @blur="date = parseDate(dateFormatted)"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        no-title
        scrollable
        @input="menu1 = false"
      ></v-date-picker>
    </v-menu>
  </v-container>
</template>

<script>
  export default {
    data: (vm) => ({
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: vm.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
    }),
  
    computed: {
      computedDateFormatted() {
        return this.formatDate(this.date);
      },
    },
  
    watch: {
      date(val) {
        this.dateFormatted = this.formatDate(this.date);
      },
    },
  
    methods: {
      formatDate(date) {
        if (!date) return null;
  
        const [year, month, day] = date.split("-");
        return `${month}/${day}/${year}`;
      },
      parseDate(date) {
        if (!date) return null;
  
        const [month, day, year] = date.split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      },
    },
  };
</script>
<style lang="scss" scoped>
.v-container {
  padding: 0 !important;
}
</style>