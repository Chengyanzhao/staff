export default {
  state: {
    treble: localStorage.getItem('treble') !== 'false',
    bass: localStorage.getItem('bass') === 'true',
    timer: localStorage.getItem('timer') === null ? 5 : +localStorage.getItem('timer')
  },
  setTrebleShow: function (value) {
    this.state.treble = value
    localStorage.setItem('treble', value)
  },
  setBassShow: function (value) {
    this.state.bass = value
    localStorage.setItem('bass', value)
  },
  setTimer: function (value) {
    this.state.timer = value
    localStorage.setItem('timer', value)
  }
}
