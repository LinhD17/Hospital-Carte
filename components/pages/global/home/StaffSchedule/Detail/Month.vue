<template>
  <v-layout>
    <v-flex>
      <h1>Rescho Calendar Month</h1>
      <!-- <v-sheet height="500">
        <v-calendar
          :now="today"
          :value="today"
          color="primary"
        >
          <template v-slot:day="{ date }">
            <template v-for="event in eventsMap[date]">
              <v-menu
                :key="event.title"
                v-model="event.open"
                full-width
                offset-x
              >
                <template v-slot:activator="{ on }">
                  <div
                    v-if="!event.time"
                    v-ripple
                    class="my-event"
                    v-on="on"
                    v-html="event.title"
                  ></div>
                </template>
                <v-card
                  color="grey lighten-4"
                  min-width="350px"
                  flat
                >
                  <v-toolbar
                    color="primary"
                    dark
                  >
                    <v-btn icon>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-toolbar-title v-html="event.title"></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-title primary-title>
                    <span v-html="event.details"></span>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="secondary"
                    >
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </template>
          </template>
        </v-calendar>
      </v-sheet> -->
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      today: '2019-01-08',
      events: [
        {
          title: 'Vacation',
          details: 'Going to the beach!',
          date: '2018-12-30',
          open: false
        },
        {
          title: 'Vacation',
          details: 'Going to the beach!',
          date: '2018-12-31',
          open: false
        },
        {
          title: 'Vacation',
          details: 'Going to the beach!',
          date: '2019-01-01',
          open: false
        },
        {
          title: 'Meeting',
          details: 'Spending time on how we do not have enough time',
          date: '2019-01-07',
          open: false
        },
        {
          title: '30th Birthday',
          details: 'Celebrate responsibly',
          date: '2019-01-03',
          open: false
        },
        {
          title: 'New Year',
          details: 'Eat chocolate until you pass out',
          date: '2019-01-01',
          open: false
        },
        {
          title: 'Conference',
          details: 'Mute myself the whole time and wonder why I am on this call',
          date: '2019-01-21',
          open: false
        },
        {
          title: 'Hackathon',
          details: 'Code like there is no tommorrow',
          date: '2019-02-01',
          open: false
        }
      ]
    }),
    computed: {
      // convert the list of events into a map of lists keyed by date
      eventsMap () {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      }
    },
    methods: {
      open (event) {
        alert(event.title)
      }
    }
  }
</script>


<style scoped>
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
</style>


<!-- <template>
  <div>
    <div class="d-flex justify-space-around">
      <v-btn
        v-for="w in week"
        :key="w.value"
        :color="w.color"
        icon
        style="height: 30px; width: 30px"
        @click="clickWeek(w.value)"
        >{{ w.label }}</v-btn
      >
    </div>
    <v-calendar hide-header v-model="focus">
      <template #day-label="{ date, day }">
        <v-btn
          icon
          :color="isHoliday(date) ? 'error' : ''"
          :outlined="isHoliday(date)"
          @click="clickDate(date)"
          class="mb-1"
          >{{day}}
        </v-btn>
      </template>
    </v-calendar>
  </div>
</template>

<script>
function formatDate(dt) {
  var y = dt.getFullYear();
  var m = ("00" + (dt.getMonth() + 1)).slice(-2);
  var d = ("00" + dt.getDate()).slice(-2);
  return y + "-" + m + "-" + d;
}

export default {
  name: "MyCalendar",
  props: {
    year: { type: Number },
    month: { type: Number },
    value: { type: Array },
  },
  data: () => ({
    week: [
      { value: 0, label: "日", color: "error" },
      { value: 1, label: "月", color: "" },
      { value: 2, label: "火", color: "" },
      { value: 3, label: "水", color: "" },
      { value: 4, label: "木", color: "" },
      { value: 5, label: "金", color: "" },
      { value: 6, label: "土", color: "info" },
    ],
    focus: null,
  }),
  created() {
    this.setFocus();
  },
  computed: {
    holidays: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  watch: {
    year() {
      this.setFocus();
    },
    month() {
      this.setFocus();
    },
  },
  methods: {
    setFocus() {
      this.focus = new Date(
        this.year ?? new Date().getFullYear(),
        this.month ? this.month - 1 : new Date().getMonth(),
        1
      );
    },
    clickWeek(weekValue) {
      // 表示月で指定曜日の最初の日付を計算
      let diff = weekValue - this.focus.getDay();
      const startDay = new Date(
        this.focus.getFullYear(),
        this.focus.getMonth(),
        this.focus.getDate() + (diff < 0 ? diff + 7 : diff)
      );

      // 7日ずつ加算しながら祝日データとして追加
      // 表示月を超えたら処理終了
      while (startDay.getMonth() === this.focus.getMonth()) {
        if (this.holidays.some((x) => x === formatDate(startDay)) === false) {
          this.holidays.push(formatDate(startDay));
        }

        startDay.setDate(startDay.getDate() + 7);
      }
    },
    clickDate(date) {
      const index = this.holidays.indexOf(date);

      if (index === -1) {
        this.holidays.push(date);
      } else {
        this.holidays.splice(index, 1);
      }
    },
    isHoliday(date) {
      return this.holidays.some((x) => x === date);
    },
  },
};
</script> -->