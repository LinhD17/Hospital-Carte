<template>
    <div class="table-wrapper mt-6">
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
                        { title: '病棟名', key: 'ward', align: 'center', rowspan: 2},
                        { title: '救護区分', key: 'reliefClassification', align: 'center', colspan: 3},
                        { title: '行動制限', key: 'behaviorRestrictions', align: 'center', colspan: 2},
                        { title: '入院形態', key: 'hospitalizationForm', align: 'center', colspan: 5},
                    ],
                    [
                        { title: '担送', key: 'carrying', align: 'center',},
                        { title: '護送',key: 'escort', align: 'center',},
                        { title: '独歩',key: 'selfGuided',align: 'center',},

                        { title: '隔離', key: 'isolate', align: 'center',},
                        { title: '拘束', key: 'restraint', align: 'center',},

                        {title: '任意', key: 'any', align: 'center',},
                        {title: '医療保護',key: 'medicalProtection', align: 'center',},
                        {title: '措置', key: 'measure', align: 'center',},
                        {title: '応急',key: 'emergency', align: 'center',},
                        {title: 'その他',key: 'others', align: 'center',},
                    ]
                ],
                dummyItems: [
                    {
                        ward: "1病棟",
                        carrying: 30, 
                        escort: 16, 
                        selfGuided: 6,
                        isolate: 20, 
                        restraint: 22, 
                        any: 30, 
                        medicalProtection: 2, 
                        measure: 40, 
                        emergency: 6, 
                        others:1,
                    }, 
                    {
                        ward: "2病棟",
                        carrying: 20, 
                        escort: 10, 
                        selfGuided: 6,
                        isolate: 22, 
                        restraint: 2, 
                        any: 3, 
                        medicalProtection: 2, 
                        measure: 40, 
                        emergency: 8, 
                        others:1,
                    }, 
                    {
                        ward: "3病棟",
                        carrying: 50, 
                        escort: 26, 
                        selfGuided: 12,
                        isolate: 42, 
                        restraint: 24, 
                        any: 32, 
                        medicalProtection: 4, 
                        measure: 80, 
                        emergency: 14, 
                        others:2,
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
    font-size: 16px;
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