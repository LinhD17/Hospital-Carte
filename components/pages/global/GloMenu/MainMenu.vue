<template>
    <!-- <div class="pa-0 global-menu">
        <div class="nav">
            <v-list nav class="pa-0 navbar" style="background-color: #e6e6e6;">
                <v-list-item 
                    v-for="(menus, index) in Menu.items"
                    :key="menus.sort_no"
                    class="pa-0 c-gnav"
                    :class="menus.name_en"
                    dense
                >
                    <div 
                        class="menu-item"
                        :class = "menus.active ? 'active' : ''"
                        @click="showSubMenu(index)"
                    >
                        <div 
                            class="btn-icon-text" 
                            :style="{ backgroundImage: 'url(' + menus.icon + ')' }" 
                        >
                            {{ menus.name }}
                        </div>
                    </div>
                </v-list-item>
            </v-list>
        </div>
    </div> -->
    <div class="pa-0 global-menu">
        <div class="nav">
            <v-list nav class="pa-0 navbar" style="background-color: #e6e6e6;">
                <v-list-item
                    v-for="(menus, index) in Menu.items"
                    :key="menus.sort_no"
                    class="pa-0 c-gnav"
                    :class="menus.name_en"
                    dense
                >
                    <div
                        class="menu-item"
                        :class = "menus.active ? 'active' : ''"
                        @click="showSubMenu(index)"
                    >
                        <!-- <v-icon>mdi-heart</v-icon> -->
                        <!-- <img :src="imageUrl"/>  -->
                        <div class="btn-icon-text">
                            {{ menus.name }}
                        </div>

                    </div>
                </v-list-item>
            </v-list>
        </div>
        <transition name="fade">
            <div v-if="isActive" class = "sub-modal">
                <v-list
                    class="sub-list"
                    width="170px"
                    color="rgba(230, 230, 230, 0.95)"
                    dense
                >
                    <v-list-item
                        v-for="(list, index) in subData"
                        :key="list.sort_no"
                        class="pa-0 sub-list-item pl-2"
                        @click="transition(index)"
                    >
                        {{  list.name }}
                    </v-list-item>
                </v-list>
                <div class="bg" @click="hideSubMenu"></div>
            </div>
        </transition>
    </div>

</template>

<script setup lang="ts">
    import { ref} from 'vue'
    import { cloneDeep } from 'lodash'
    import { GLOBAL_MENU} from './constant'
    import { Level1, Level2, MenuItems } from '~/hooks/global/globalMenu/useMenu'

    import imageUrl from '@/assets/icon/ward.svg'

    const router = useRouter()
    const Menu = ref<MenuItems>(cloneDeep(GLOBAL_MENU))
    const sortList = ref([])
    const isActive = ref(false)
    const subData = ref<Level2[]>([])
    const copy = ref()
    
    //showSubmenu 
    //map(): một tập hợp các cặp key/value có thể sử dụng mọi kiểu dữ liệu làm key và có thể duy trì thứ tự các phần tử của nó.
    const showSubMenu = (index: number) => {
        Menu.value.items = Menu.value.items.map((item: Level1, i: number) => ({
            ...item,
            active: i === index,
        }))
        //nếu subMenu không có thì ko cần show ra 
        if (Menu.value.items[index].level2_menus.length === 0) {
            isActive.value = false
            return
        }
        isActive.value = true
        //cloneDeep(): sao chép 1 Object, Obj mới cũng sẽ có 1 địa chỉ mới trong bộ nhớ nên mọi sự thay đổi của nó không ảnh hưởng đén các thuộc tính của Obj ban đầu 
        subData.value = cloneDeep(Menu.value.items[index].level2_menus)
    }

    const transition = (index: number) => {
        if (subData.value[index].path !== '/') {
            router.push(subData.value[index].path as string) 
            hideSubMenu()
        }
        else {
            hideSubMenu()
        }
    }
    const hideSubMenu = () => {
        isActive.value = false
    }
</script>

<style lang="scss" scoped>
$hover-bg: var(--primary, 'color1');
.global-menu {
    display: flex;
    height: 94%;
    position: absolute;
    top: 62px;
    z-index: 5;
    margin-top: -3px;
    
    &:deep(.v-list--nav .v-list-item:not(:last-child):not(:only-child)) {
        margin-bottom: 0;
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

.sub-modal {
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  z-index: 4;
  .bg {
    background-color: #000;
    opacity: 0.46;
    flex-grow: 2;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}

.btn-icon-text {
  font-size: 12px !important;
}

.nav {
  position: relative;
  min-width: 54px;
  max-width: 54px;
  z-index: 20;
}

/* サブリストのCSS */
.sub-list-item.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled):hover {
  color: rgba(51, 51, 51, 0.6) !important;
}

.sub-list {
  padding: 0 !important;
}
.sub-list-item {
  padding: 10px 12px !important;
  font-size: 14px;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.sub-list-item.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled):hover {
  background-color: #62bde7;
  color: rgba(255, 255, 255, 1) !important;
}
.v-list-item--link:before {
  background-color: rgba(230, 230, 230, 0.95) !important;
  color: #333333 !important;
}
.c-gnav {
    > .menu-item {
        > .btn-icon-text {
            width: 100%;
            height: 50px;
            padding-top: 30px;
            padding-bottom: 2px;
            //background-image: url(/assets/icon/globalMenu/common.svg);
            background-image: url('~@/assets/icon/globalMenu/common.svg');
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
                //background-image: url(/assets/icon/globalMenu/common.svg);
                background-image: url('~@/assets/icon/globalMenu/common.svg');
            }
        }
    }
  
    // &.g-nav2 {
    //     > .menu-item {
    //         //background-image: url(/assets/icon/globalMenu/common.svg);
    //         background-image: url('~@/assets/icon/globalMenu/favorite.svg');
    //     }
    //     &:hover,
    //     &.active {
    //         > .btn-icon-text {
    //             //background-image: url(/assets/icon/globalMenu/common.svg);
    //             background-image: url('@/assets/icon/globalMenu/favorite.svg');
    //         }
    //     }
    // }
    // &.g-nav3 {
    //     > .menu-item {
    //     > .btn-icon-text {
    //         //background-image: url(/assets/icon/globalMenu/common.svg);
    //         background-image: url('@/assets/icon/globalMenu/outpatient.svg');
    //     }
    //     &:hover,
    //     &.active {
    //         > .btn-icon-text {
    //             //background-image: url(/assets/icon/globalMenu/common.svg);
    //             background-image: url('@/assets/icon/globalMenu/outpatient_ov.svg');
    //         }
    //     }
    //     }
    // }
    // &.g-nav4 {
    //     > .menu-item {
    //     > .btn-icon-text {
    //         //background-image: url(/assets/icon/globalMenu/common.svg);
    //         background-image: url('@/assets/icon/globalMenu/ward.svg');
    //     }
    //     &:hover,
    //     &.active {
    //         > .btn-icon-text {
    //             //background-image: url(/assets/icon/globalMenu/common.svg);
    //             background-image: url('@/assets/icon/globalMenu/ward_ov.svg');
    //         }
    //     }
    //     }
    // }
    // &.g-nav5 {
    //     > .menu-item {
    //     > .btn-icon-text {
    //         //background-image: url(/assets/icon/globalMenu/common.svg);
    //         background-image: url('@/assets/icon/globalMenu/tick.svg');
    //     }
    //     &:hover,
    //     &.active {
    //         > .btn-icon-text {
    //             //background-image: url(/assets/icon/globalMenu/common.svg);
    //             background-image: url('@/assets/icon/globalMenu/tick_ov.svg');
    //         }
    //     }
    //     }
    // }
    // &.g-nav6 {
    //     > .menu-item {
    //     > .btn-icon-text {
    //         //background-image: url(/assets/icon/globalMenu/common.svg);
    //         background-image: url('@/assets/icon/globalMenu/house.svg');
    //     }
    //     &:hover,
    //     &.active {
    //         > .btn-icon-text {
    //             //background-image: url(/assets/icon/globalMenu/common.svg);
    //             background-image: url('@/assets/icon/globalMenu/house_ov.svg');
    //         }
    //     }
    //     }
    // }
    // &.g-nav7 {
    //     > .menu-item {
    //     > .btn-icon-text {
    //         //background-image: url(/assets/icon/globalMenu/common.svg);
    //         background-image: url('@/assets/icon/globalMenu/rehabilitation.svg');
    //     }
    //     &:hover,
    //     &.active {
    //         > .btn-icon-text {
    //             //background-image: url(/assets/icon/globalMenu/common.svg);
    //             background-image: url('@/assets/icon/globalMenu/rehabilitation_ov.svg');
    //         }
    //     }
    //     }
    // }
    // &.g-nav8 {
    //     > .menu-item {
    //     > .btn-icon-text {
    //         //background-image: url(/assets/icon/globalMenu/common.svg);
    //         background-image: url('@/assets/icon/globalMenu/coaching.svg');
    //     }
    //     &:hover,
    //     &.active {
    //         > .btn-icon-text {
    //             //background-image: url(/assets/icon/globalMenu/common.svg);
    //             background-image: url('@/assets/icon/globalMenu/coaching_ov.svg');
    //         }
    //     }
    //     }
    // }
    // &.g-nav9 {
    //     > .menu-item {
    //     > .btn-icon-text {
    //         //background-image: url(/assets/icon/globalMenu/common.svg);
    //         background-image: url('@/assets/icon/globalMenu/other.svg');
    //     }
    //     &:hover,
    //     &.active {
    //         > .btn-icon-text {
    //             //background-image: url(/assets/icon/globalMenu/common.svg);
    //             background-image: url('@/assets/icon/globalMenu/other_ov.svg');
    //         }
    //     }
    //     }
    // }
    // &.g-nav10 {
    //     > .menu-item {
    //     > .btn-icon-text {
    //         //background-image: url(/assets/icon/globalMenu/common.svg);
    //         background-image: url('@/assets/icon/globalMenu/master.svg');
    //     }
    //     &:hover,
    //     &.active {
    //         > .btn-icon-text {
    //             //background-image: url(/assets/icon/globalMenu/common.svg);
    //             background-image: url('@/assets/icon/globalMenu/master_ov.svg');
    //         }
    //     }
    //     }
    // }
    // &.g-nav11 {
    //     > .menu-item {
    //     > .btn-icon-text {
    //         //background-image: url(/assets/icon/globalMenu/common.svg);
    //         background-image: url('@/assets/icon/globalMenu/management.svg');
    //     }
    //     &:hover,
    //     &.active {
    //         > .btn-icon-text {
    //             //background-image: url(/assets/icon/globalMenu/common.svg);
    //             background-image: url('@/assets/icon/globalMenu/management_ov.svg');
    //         }
    //     }
    //     }
    // }
}
</style>