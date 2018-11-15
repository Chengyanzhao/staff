<template>
  <div class="settings">
    <mt-cell title="高音谱表">
      <mt-switch v-model="treble"></mt-switch>
    </mt-cell>
    <mt-cell title="低音谱表">
      <mt-switch v-model="bass"></mt-switch>
    </mt-cell>
    <mt-cell title="倒计时" :label="timer.toString()">
      <mt-range v-model="timer" :min="0" :max="10" :step="1" :bar-height="5">
        <div slot="start">0</div>
        <div slot="end">10</div>
      </mt-range>
    </mt-cell>
  </div>
</template>

<script>
import store from '../store.js'
import Vue from 'vue'
import { Cell, Switch, Range } from 'mint-ui'
Vue.component(Cell.name, Cell)
Vue.component(Switch.name, Switch)
Vue.component(Range.name, Range)

export default {
  name: 'settings',
  data: function () {
    return {}
  },
  computed: {
    treble: {
      get: function () {
        return store.state.treble
      },
      set: function (value) {
        store.setTrebleShow(value)
      }
    },
    bass: {
      get: function () {
        return store.state.bass
      },
      set: function (value) {
        store.setBassShow(value)
      }
    },
    timer: {
      get: function () {
        return store.state.timer
      },
      set: function (value) {
        store.setTimer(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  .mt-range{
    width: 200px;
  }
}
</style>
