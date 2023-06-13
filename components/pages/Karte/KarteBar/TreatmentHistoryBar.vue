<template>
    <div class="treatment-history-bar">
        <!-- <span></span>
        <div class="history history--treayment">
            <v-tooltip>
                <template></template>
                <span>外来</span>
                <span>入院形態</span>
                <span>
                    病院名：
                    <br />
                    外来
                </span>
                <span>
                    病院名：
                    <br />
                    入院
                </span>
            </v-tooltip>
            <p class="label">治療歴</p>
        </div>
        <div>
            <v-tooltip>
                <template></template>
                <span>デイケア</span>
                <span>
                    病院名：
                    <br/>
                    デイケア
                </span>
            </v-tooltip>
            <p class="label">ケア</p>
        </div>
        <div>
            <v-tooltip>
                <template></template>
                <span>...歳:...</span>
            </v-tooltip>
        </div> -->
    </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

</script>

<style lang="scss" scoped>
.treatment-history {
  position: relative;
}
  .treatment-history-bar {
    height: calc(100vh - 175px);
    width: 54px;
    left: -49px;
    position: absolute;
    top: 0;
    padding: 10px 0 0;
    //  background-color: #f0f0f0;

    .history {
    height: 100%;
    width: 10px;
    position: absolute;
    background-color: #ffffff;
    &--treatment {
      position: absolute;
      left: 50%;
      transform: translateX(-12px);
      .primary-stripe {
        background-image: url('~@/assets/icon/diagonal.png');
        background-color: #a3d5f5;
        background-repeat: repeat;
        background-position: 0 0;
        background-size: 10px auto;
      }
      .green-stripe {
        background-image: url('~@/assets/icon/diagonal.png');
        background-color: #cdeab2;
        background-repeat: repeat;
        background-position: 0 0;
        background-size: 10px auto;
      }
      .blue-stripe {
        background-image: url('~@/assets/icon/diagonal.png');
        background-color: #2196f3;
        background-repeat: repeat;
        background-position: 0 0;
        background-size: 10px auto;
      }
    }
    &--care {
      position: absolute;
      left: 50%;
      transform: translateX(2px);
      .orange {
        background-color: #f55a0c !important;
      }
      .orange-stripe {
        background-image: url('~@/assets/icon/diagonal.png');
        background-color: #f55a0c;
        background-repeat: repeat;
        background-position: 0 0;
        background-size: 10px auto;
      }
    }
    &--topic {
      position: absolute;
      width: 54px;
      background: transparent;
      z-index: 0;
      pointer-events: none;
    }
    .treatment-item {
      width: 10px;
      position: absolute;
      z-index: 10;
    }
    .history-item {
      width: 10px;
      position: absolute;
      z-index: 10;
    }
    .topic-item {
      width: 24px;
      height: 1%;
      position: absolute;
      left: 15px;
      background-color: #c83232;
      pointer-events: auto;
      z-index: 10;
    }
    .label {
      position: absolute;
      bottom: -20px;
      transform: translateY(100%);
    }
  }
  .age-label {
    position: absolute;
    left: -1px;
  }

}
</style>