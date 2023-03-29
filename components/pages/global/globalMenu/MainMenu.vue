<template>
    <div class="pa-0 global-menu">
        <div class="nav">
            <v-list nav class="pa-0 navbar" style="background-color: #e6e6e6;">
                <v-list-item v-for="(menu, index) in items"
                    :key="index"
                    class="pa-0 c-gnav"
                    dens
                >
                    <div class="menu-item">
                        <div class="btn-icon-text" :style="{ backgroundImage: 'url(' + menu.icon + ')' }">
                            {{ menu.name }}
                        </div>
                    </div>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent(
    {
        setup() {
            const Menu = {
            items: [
                // 1 home 
                {
                name: 'ホーム',
                name_en: 'g-nav1',
                level2_menus: [
                    {
                    name: '周知・業務タスク',
                    path: '/global/common/wellKnownAndTask',
                    },
                ],
                icon: require('@/assets/icons/globalMenu/common.svg'),
                },
                // 2 favorite
                {
                name: '気に入り',
                name_en: 'g-nav1',
                icon: require('@/assets/icons/globalMenu/favorite.svg'),
                level2_menus: [
                    {
                    name: '周知・業務タスク',
                    path: '/global/common/wellKnownAndTask',
                    },
                ],
                },
                // ３ outpatient 
                {
                name: '外来',
                name_en: 'g-nav1',
                icon: require('@/assets/icons/globalMenu/outpatient.svg'),
                level2_menus: [
                    {
                    name: '周知・業務タスク',
                    path: '/global/common/wellKnownAndTask',
                    },
                ],
                },
                // ４ ward
                {
                name: '病棟',
                name_en: 'g-nav1',
                icon: require('@/assets/icons/globalMenu/ward.svg'),
                level2_menus: [
                    {
                    name: '周知・業務タスク',
                    path: '/global/common/wellKnownAndTask',
                    },
                ],
                },
                // ５ 訪問看護
                {
                name: '訪問看護',
                name_en: 'g-nav1',
                icon: require('@/assets/icons/globalMenu/house.svg'),
                level2_menus: [
                    {
                    name: '周知・業務タスク',
                    path: '/global/common/wellKnownAndTask',
                    },
                ],
                },
                // ６ リハビリ
                {
                name: 'リハビリ',
                name_en: 'g-nav1',
                icon: require('@/assets/icons/globalMenu/rehabilitation.svg'),
                level2_menus: [
                    {
                    name: '周知・業務タスク',
                    path: '/global/common/wellKnownAndTask',
                    },
                ],
                },
                // ７ 指導依頼
                {
                name: '指示確認',
                name_en: 'g-nav1',
                icon: require('@/assets/icons/globalMenu/tick.svg'),
                level2_menus: [
                    {
                    name: '周知・業務タスク',
                    path: '/global/common/wellKnownAndTask',
                    },
                ],
                },
                // ８ その他
                {
                name: 'その他',
                name_en: 'g-nav1',
                icon: require('@/assets/icons/globalMenu/other.svg'),
                level2_menus: [
                    {
                    name: '周知・業務タスク',
                    path: '/global/common/wellKnownAndTask',
                    },
                ],
                },
                // ９ マスター
                {
                name: 'マスター',
                name_en: 'g-nav1',
                icon: require('@/assets/icons/globalMenu/master.svg'),
                level2_menus: [
                    {
                    name: '周知・業務タスク',
                    path: '/global/common/wellKnownAndTask',
                    },
                ],
                },
            ]
            }
            return Menu;
        }
    }
)
</script>

<style lang="scss" scoped>
.global-menu {
  display: flex;
  height: 100%;
  position: absolute;
  top: 62px;
  z-index: 5;
  margin-top: -3px;

  &::v-deep {
    .v-list--nav .v-list-item:not(:last-child):not(:only-child) {
      margin-bottom: 0;
    }
  }
}
.navbar {
  height: 100%;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: -5px;
    width: 5px;
    height: 100vh;
    background: linear-gradient(
      90deg,
      rgba(102, 102, 102, 0.2) 0%,
      rgba(102, 102, 102, 0) 100%
    );
    mix-blend-mode: multiply;
  }
}

.menu-item {
  width: 54px;
  height: 54px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
  cursor: pointer;

  .image {
    width: 50%;
  }

  &:hover {
    background-color: #1ea0dc;
    color: #fff;
  }

  &:hover .image {
    filter: brightness(0) invert(1);
  }

  &.active {
    background-color: #1ea0dc;
    color: #fff;

    .image {
      filter: brightness(0) invert(1);
    }
  }
}
.c-gnav {
  > .menu-item {
    > .btn-icon-text {
      width: 100%;
      padding-top: 31px;
      padding-bottom: 2px;
      background-image: url('@/assets/icons/globalMenu/common.svg');
      background-repeat: no-repeat;
      background-position: 50% 4px;
      background-size: 26px auto;
      -webkit-transition: 0.3s ease-in-out;
      transition: 0.3s ease-in-out;
      text-align: center;
    }
    &:hover,
    &.active {
      > .btn-icon-text{
        background-image: url('@/assets/icons/globalMenu/common.svg');
      }
    }
  }

  &.g-nav2 {
    > .menu-item {
      > .btn-icon-text {
        background-image: url('@/assets/icons/globalMenu/favorite.svg');
      }
      &:hover,
      &.active {
        > .btn-icon-text {
          background-image: url('@/assets/icons/globalMenu/favorite.svg');
        }
      }
    }
  }

//   &.g-nav3 {
//     > .menu-item {
//       > .btn-icon-text {
//         background-image: url('@/assets/icon/globalMenu/outpatient.svg');
//       }
//       &:hover,
//       &.active {
//         > .btn-icon-text {
//           background-image: url('@/assets/icon/globalMenu/outpatient_ov.svg');
//         }
//       }
//     }
//   }

//   &.g-nav4 {
//     > .menu-item {
//       > .btn-icon-text {
//         background-image: url('@/assets/icon/globalMenu/ward.svg');
//       }
//       &:hover,
//       &.active {
//         > .btn-icon-text {
//           background-image: url('@/assets/icon/globalMenu/ward_ov.svg');
//         }
//       }
//     }
//   }

//   &.g-nav5 {
//     > .menu-item {
//       > .btn-icon-text {
//         background-image: url('@/assets/icon/globalMenu/tick.svg');
//       }
//       &:hover,
//       &.active {
//         > .btn-icon-text {
//           background-image: url('@/assets/icon/globalMenu/tick_ov.svg');
//         }
//       }
//     }
//   }
// &.g-nav6 {
//     > .menu-item {
//       > .btn-icon-text {
//         background-image: url('@/assets/icon/globalMenu/house.svg');
//       }
//       &:hover,
//       &.active {
//         > .btn-icon-text {
//           background-image: url('@/assets/icon/globalMenu/house_ov.svg');
//         }
//       }
//     }
//   }

//   &.g-nav7 {
//     > .menu-item {
//       > .btn-icon-text {
//         background-image: url('@/assets/icon/globalMenu/rehabilitation.svg');
//       }
//       &:hover,
//       &.active {
//         > .btn-icon-text {
//           background-image: url('@/assets/icon/globalMenu/rehabilitation_ov.svg');
//         }
//       }
//     }
//   }

//   &.g-nav8 {
//     > .menu-item {
//       > .btn-icon-text {
//         background-image: url('@/assets/icon/globalMenu/coaching.svg');
//       }
//       &:hover,
//       &.active {
//         > .btn-icon-text {
//           background-image: url('@/assets/icon/globalMenu/coaching_ov.svg');
//         }
//       }
//     }
//   }

//   &.g-nav9 {
//     > .menu-item {
//       > .btn-icon-text {
//         background-image: url('@/assets/icon/globalMenu/other.svg');
//       }
//       &:hover,
//       &.active {
//         > .btn-icon-text {
//           background-image: url('@/assets/icon/globalMenu/other_ov.svg');
//         }
//       }
//     }
//   }

//   &.g-nav10 {
//     > .menu-item {
//       > .btn-icon-text {
//         background-image: url('@/assets/icon/globalMenu/master.svg');
//       }
//       &:hover,
//       &.active {
//         > .btn-icon-text {
//           background-image: url('@/assets/icon/globalMenu/master_ov.svg');
//         }
//       }
//     }
//   }

//   &.g-nav11 {
//     > .menu-item {
//       > .btn-icon-text {
//         background-image: url('@/assets/icon/globalMenu/management.svg');
//       }
//       &:hover,
//       &.active {
//         > .btn-icon-text {
//           background-image: url('@/assets/icon/globalMenu/management_ov.svg');
//         }
//       }
//     }
//   }
.btn-icon-text{
    font-size: 10px !important;
}
.nav {
  position: relative;
  min-width: 54px;
  max-width: 54px;
  z-index: 20;
}
}
</style>