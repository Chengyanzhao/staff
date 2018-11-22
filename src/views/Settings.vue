<template>
  <div class="settings">
    <mt-cell title="高音谱表">
      <mt-switch v-model="treble"></mt-switch>
    </mt-cell>
    <mt-cell title="低音谱表">
      <mt-switch v-model="bass"></mt-switch>
    </mt-cell>
    <mt-cell title="音符个数" :label="noteCount.toString()">
      <mt-range v-model="noteCount" :min="0" :max="8" :step="1">
        <div slot="start">0</div>
        <div slot="end">8</div>
      </mt-range>
    </mt-cell>
    <mt-cell title="倒计时" :label="timer.toString()">
      <mt-range v-model="timer" :min="1" :max="10" :step="1">
        <div slot="start">1</div>
        <div slot="end">10</div>
      </mt-range>
    </mt-cell>
    <mt-cell title="音符名称出现时间" :label="noteNameTime.toString()">
      <mt-range v-model="noteNameTime" :min="1" :max="timer" :step="1">
        <div slot="start">1</div>
        <div slot="end">{{timer}}</div>
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
    },
    noteNameTime: {
      get: function () {
        return store.state.noteNameTime
      },
      set: function (value) {
        store.setNoteNameTime(value)
      }
    },
    noteCount: {
      get: function () {
        return store.state.noteCount
      },
      set: function (value) {
        store.setNoteCount(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  .mt-range {
    width: 200px;
  }
}
</style>
