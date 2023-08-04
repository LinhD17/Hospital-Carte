<template>
    <div class="table-wrapper mt-6">
        <div class="table-title">病棟別患者数</div>
        <v-data-table-virtual
            :headers="headers"
            :items="dummyItems"
            class="elevation-1"
        >
        </v-data-table-virtual>
    </div>
</template>
<script lang="ts">
    export default {
        data () {
            return {
                headers: [
                    [
                        { title: '病棟名', key: 'ward', align: 'center', rowspan: 2, width: 104},
                        { title: '入院', key: 'hospitalization', align: 'center',rowspan: 2, width: 90},
                        { title: '退院', key: 'discharge', align: 'center',rowspan: 2, width: 90},
                        { title: '転入', key: 'movingIn', align: 'center',rowspan: 2, width: 90},
                        { title: '転出', key: 'moveOut', align: 'center',rowspan: 2, width: 90},
                        { title: '外泊', key: 'sleepover', align: 'center',rowspan: 2, width: 90},
                        { title: '外出', key: 'goOut', align: 'center',rowspan: 2, width: 90},
                        { title: '帰院', key: 'returnToHospital', align: 'center',rowspan: 2, width: 90},
                        { title: '前日数', key: 'daysBefore', align: 'center',rowspan: 2, width: 104},
                        { title: '総数', key: 'totalNumber', align: 'center',rowspan: 2, width: 90},
                        { title: '在院数', key: 'numberOfHospitalizations', align: 'center',rowspan: 2, width: 104},
                        { title: '責任者', key: 'responsiblePerson', align: 'center', colspan: 3}
                    ], 
                    [
                        { title: '深夜', key: 'responsiblePerson_midnight', align: 'center', width: 100},
                        { title: '日勤', key: 'responsiblePerson_dayShift', align: 'center', width: 100},
                        { title: '準夜', key: 'responsiblePerson_semiNight', align: 'center', width: 100},
                    ]
                ],
                dummyItems: [
                    {
                        ward: "1病棟", 
                        hospitalization: "30人",
                        discharge: "16人", 
                        movingIn: "6人", 
                        moveOut: "20人", 
                        sleepover: "22人", 
                        goOut: "30人", 
                        returnToHospital: "2人", 
                        daysBefore: "40人", 
                        totalNumber: "6人", 
                        numberOfHospitalizations: "1人", 
                        responsiblePerson_midnight: "看護花子",
                        responsiblePerson_dayShift: "看護花子",
                        responsiblePerson_semiNight:"看護花子"
                    }, 
                    {
                        ward: "2病棟", 
                        hospitalization: "20人",
                        discharge: "10人", 
                        movingIn: "6人", 
                        moveOut: "22人", 
                        sleepover: "2人", 
                        goOut: "3人", 
                        returnToHospital: "2人", 
                        daysBefore: "40人", 
                        totalNumber: "8人", 
                        numberOfHospitalizations: "1人", 
                        responsiblePerson_midnight: "看護花子",
                        responsiblePerson_dayShift: "看護花子",
                        responsiblePerson_semiNight:"看護花子"
                    }, 
                    {
                        ward: "3病棟", 
                        hospitalization: "50人",
                        discharge: "26人", 
                        movingIn: "12人", 
                        moveOut: "32人", 
                        sleepover: "24人", 
                        goOut: "33人", 
                        returnToHospital: "14人", 
                        daysBefore: "80人", 
                        totalNumber: "6人", 
                        numberOfHospitalizations: "2人", 
                        responsiblePerson_midnight: "看護花子",
                        responsiblePerson_dayShift: "看護花子",
                        responsiblePerson_semiNight:"看護花子"
                    }, 
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
.table-wrapper {
  margin-left: 15px;
  .has-border-left {
    border-left: thin solid rgba(0, 0, 0, 0.12);
  }

  .has-border-right {
    border-right: thin solid rgba(0, 0, 0, 0.12);
  }
  .v-data-table--fixed-header
    > .v-data-table__wrapper
    > table
    > thead
    > tr:nth-child(2)
    > th {
    top: auto;
  }
  .table-title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      margin-right: 6px;
      display: inline-block;
      width: 4px;
      height: 16px;
      background-color: #1ea0dc;
      color: #1ea0dc;
    }
  }
}
</style>