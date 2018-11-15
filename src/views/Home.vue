<template>
  <div class="home">
    <div class="countdown">
      <h2>{{countdown}}s</h2>
    </div>
    <div class="stave-content">
      <stave ref="treble" v-if="state.treble"></stave>
      <stave type="bass" ref="bass" v-if="state.bass"></stave>
    </div>
    <div class="control">
      <mt-button type="default" @click="start" v-show="!timer">start</mt-button>
      <mt-button type="default" @click="stop" v-show="timer">stop</mt-button>
    </div>
  </div>
</template>

<script>
import store from '../store.js'
import Vue from 'vue'
import stave from '../components/stave'
import { Button } from 'mint-ui'
Vue.component(Button.name, Button)

export default {
  name: 'HelloWorld',
  components: { stave },
  data: function () {
    return {
      highShow: true,
      lowShow: false,
      note: {
        high: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5'],
        low: ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3']
      },
      noteValues: ['/q', '/h', '/w', '/r'], // 四分音符，二分音符，全音符，终止符。
      state: store.state,
      timer: null,
      countdown: store.state.timer
    }
  },
  watch: {
    state: {
      deep: true,
      immediate: true,
      handler: function (value) {
        this.reset()
      }
    }
  },
  methods: {
    render: function (isDefault) {
      this.state.treble && this.$refs.treble.start(isDefault)
      this.state.bass && this.$refs.bass.start(isDefault)
    },
    start: function () {
      if (this.timer) {
        return
      }
      this.countdown--
      // 每秒刷新一次时间
      const rate = 1000 // 1000ms
      this.timer = setInterval(() => {
        if (this.countdown === 0) {
          this.render()
          this.countdown = store.state.timer - 1
        } else {
          this.countdown--
        }
      }, rate)
    },
    stop: function () {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    reset: function () {
      this.stop()
      this.countdown = store.state.timer
      this.$nextTick(() => {
        this.render(true)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  .countdown {
    margin-top: 25%;
    color: #6a8bad;
  }
  .stave-content {
    margin-top: 50px;
  }
}
</style>
