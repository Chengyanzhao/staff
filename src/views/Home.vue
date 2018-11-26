<template>
  <div class="home">
    <div class="wrapper">
      <div class="countdown">
        <h2>{{countdown}}s</h2>
      </div>
      <div class="stave-content">
        <stave
          ref="treble"
          v-if="state.treble"
        ></stave>
        <stave
          type="bass"
          ref="bass"
          v-if="state.bass"
        ></stave>
      </div>
      <div class="control">
        <mt-button
          type="default"
          @click="start"
          v-show="!timer"
        >start</mt-button>
        <mt-button
          type="default"
          @click="stop"
          v-show="timer"
        >stop</mt-button>
      </div>
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
      this.state.treble && this.$refs.treble.start(this.state.noteCount)
      this.state.bass && this.$refs.bass.start(this.state.noteCount)
    },
    start: function () {
      if (this.timer) {
        return
      }
      const rate = 1000 // 1000ms
      this.timer = setInterval(this.do, rate)
    },
    do: function () {
      const isShowNoteName = this.countdown > 0 && this.countdown <= this.state.noteNameTime
      this.state.treble && this.$refs.treble.setNoteNameShow(isShowNoteName)
      this.state.bass && this.$refs.bass.setNoteNameShow(isShowNoteName)
      if (this.countdown === 0) {
        this.render()
        this.countdown = store.state.timer - 1
      } else {
        this.countdown--
      }
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
  position: relative;
  height: 100%;
  .wrapper{
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    .countdown {
      color: #6a8bad;
    }
    .control{
      margin-top: 20px;
    }
  }
}
</style>
