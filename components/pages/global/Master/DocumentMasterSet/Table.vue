<template>
    <div class="table-content">
      <v-data-table-virtual
        :headers="headers"
        :items="dummyItems"
        class="elevation-1"
      >
        <!-- edit  -->
        <!-- <template v-slot:item.editAction="{ item }">
          <div class="d-flex justify-space-between">
            <div>
              <v-icon small class="ml-1">mdi-pencil </v-icon>
            </div>
          </div>
        </template> -->
        <!-- delete  -->
        <!-- <template v-slot:item.deleteAction="{ item }">
          <div class="d-flex justify-space-between">
            <div>
              <v-icon small class="ml-1">mdi-delete </v-icon>
            </div>
          </div>
        </template> -->
      </v-data-table-virtual>
      <div class="table-footer pt-2">
        <div class="ml-3" style="margin: 0 0 0 auto">
          <v-btn
            class="mr-3"
            rounded
            style="background-color: #1ea0dc; color: #ffffff"
            @click="onModalOpenButtonClick"
          >
            新規作成
          </v-btn>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: [
          { title: '治療計画書', key: 'patternName', sortable: false, align: 'center' },
          { title: '褥瘡', key: 'freeItemName', sortable: false, align: 'center' },
          {
            title: '紹介状　情報提供書',
            key: 'letterOfIntroductionInformationProvision',
            sortable: false,
            align: 'center',
          },
          {
            title: '診断書',
            key: 'MedicalCertificate',
            sortable: false,
            align: 'center',
          },
          {
            title: '意見書',
            key: 'opinion',
            sortable: false,
            align: 'center',
          },
          {
            title: '傷病手当',
            key: 'injuryandSicknessAllowance',
            sortable: false,
            align: 'center',
          },
          {
            title: '指示書',
            key: 'directions',
            sortable: false,
            align: 'center',
          },
          {
            title: '生活保護法医療扶助',
            key: 'publicAssistanceLawMedicalAssistance',
            sortable: false,
            align: 'center',
          },
          {
            title: '医療保護入院',
            key: 'medicalProtectionHospitalization',
            sortable: false,
            align: 'center',
          },
          {
            title: '任意入院',
            key: 'voluntaryHospitalization',
            sortable: false,
            align: 'center',
          },
          {
            title: '措置入院',
            key: 'involuntaryHospitalization',
            sortable: false,
            align: 'center',
          },
          {
            title: '応急入院',
            key: 'emergencyHospitalization',
            sortable: false,
            align: 'center',
          },
          {
            title: '精神保健福祉法',
            key: 'mentalHealthWelfareAct',
            sortable: false,
            align: 'center',
          },
          {
            title: 'サマリー',
            key: 'summary',
            sortable: false,
            align: 'center',
          },
          {
            title: '栄養管理計画書',
            key: 'nutritionManagementPlan',
            sortable: false,
            align: 'center',
          },
          {
            title: '病棟管理業務',
            key: 'wardManagement',
            sortable: false,
            align: 'center',
          },
          {
            title: '行動制限',
            key: 'movementRestrictions',
            sortable: false,
            align: 'center',
          },
          {
            title: 'インシデント',
            key: 'incident',
            sortable: false,
            align: 'center',
          },
          {
            title: '看護計画',
            key: 'nursingPlan',
            sortable: false,
            align: 'center',
          },
          {
            title: 'リハビリ',
            key: 'rehabilitation',
            sortable: false,
            align: 'center',
          },
          {
            title: 'その他文書',
            key: 'otherDocuments',
            sortable: false,
            align: 'center',
          },
        ],
        dummyItems: [
          {
            patternName: 'aaa',
            freeItemName: 'AAA, BBB, CCC, DDD, 気分、通勤時間、通勤種類',
            default: 'いいえ',
            validPeriod: '2023/04/01 ~ ',
          },
          {
            patternName: 'afda',
            freeItemName: '通勤時間、通勤種類',
            default: 'いいえ',
            validPeriod: '2017/04/01 ~ ',
          },
          {
            patternName: 'fawfw',
            freeItemName: 'AAA, 気分、通勤時間、通勤種類',
            default: 'いいえ',
            validPeriod: '2017/04/01 ~ ',
          },
        ],
      }
    },
  }
  </script>
    
  <style lang="scss" scoped>
  .table-content {
    border: 0 !important;
    white-space: nowrap;
    margin-top: 10px;
  
    a {
      margin-top: 0;
      text-decoration: none;
      color: #1ea0dc;
    }
  }
  .table-footer {
    display: flex;
    position: sticky;
    top: 0;
    padding: 5px 0 !important;
    filter: drop-shadow(0 -3px 3px #e6e6e6);
    background-color: #ffffff;
  }
  </style>