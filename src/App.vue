<template>
  <div id="app">
    <!-- <router-view /> -->
    <div class="content">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="Home">
          <home ref="home"></home>
        </mt-tab-container-item>
        <mt-tab-container-item id="Settings">
          <settings></settings>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="Home">
        Home
      </mt-tab-item>
      <mt-tab-item id="Settings">
        Settings
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Vue from 'vue'
import Home from './views/Home'
import Settings from './views/Settings'
import { Tabbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
export default {
  name: 'app',
  components: { Home, Settings },
  data: function () {
    return {
      selected: 'Home'
    }
  },
  watch: {
    selected: function (value, oldValue) {
      if (oldValue === 'Home' && value !== 'Home') {
        this.clearComEvent(value)
      }
    }
  },
  methods: {
    clearComEvent: function () {
      this.$refs.home.reset()
    }
  }
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 40px;
    width: 100%;
    .mint-tab-container, .mint-tab-container-wrap, .mint-tab-container-item {
      height: 100%;
    }
  }
  .mint-tabbar {
    .mint-tab-item {
      padding: 14px 0;
    }
  }
}
</style>
