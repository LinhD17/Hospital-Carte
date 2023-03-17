<!-- Main.vue -->
<template>
  <div>
    <PageHeader />
    <div class="main-container">
      <div class="menu-column">
        <ul>
          <li @click="toggleSubMenu('menu1')">Menu 1</li>
          <li @click="toggleSubMenu('menu2')">Menu 2</li>
          <li @click="toggleSubMenu('menu3')">Menu 3</li>
        </ul>
      </div>
      <transition name="slide">
        <div class="secondary-menu-column" v-if="showSubMenu">
          <ul>
            <li>Sub-menu item 1</li>
            <li>Sub-menu item 2</li>
            <li>Sub-menu item 3</li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/pages/mainMenu/pageHeader.vue'

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      showSubMenu: false,
    }
  },
  methods: {
    toggleSubMenu(menuName) {
      if (this.showSubMenu === menuName) {
        this.showSubMenu = false
      } else {
        this.showSubMenu = menuName
      }
    },
  },
}
</script>

<style>
.main-container {
  display: flex;
}

.menu-column {
  flex: 1;
  position: fixed;
}

.secondary-menu-column {
  flex: 1;
  margin-left: 200px;
}

.slide-enter-active,
.slide-leave-active {
  transition: margin-left 0.5s;
}

.slide-enter,
.slide-leave-to {
  margin-left: -200px;
}
</style>
