function resetSettings () {
  const timer = 5
  const noteCount = 1
  const noteNameTime = 1
  if (localStorage.getItem('treble') === null) {
    localStorage.setItem('treble', true)
  }
  if (localStorage.getItem('bass') === null) {
    localStorage.setItem('bass', false)
  }
  if (localStorage.getItem('timer') === null) {
    localStorage.setItem('timer', timer)
  }
  if (localStorage.getItem('noteNameTime') === null) {
    localStorage.setItem('noteNameTime', noteNameTime)
  }
  if (localStorage.getItem('noteCount') === null) {
    localStorage.setItem('noteCount', noteCount)
  }
}
resetSettings()

export default {
  state: {
    treble: localStorage.getItem('treble') === 'true',
    bass: localStorage.getItem('bass') === 'true',
    timer: +localStorage.getItem('timer'),
    noteNameTime: +localStorage.getItem('noteNameTime'),
    noteCount: +localStorage.getItem('noteCount')
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
    // 重置音符名称出现时间
    if (this.state.noteNameTime > value) {
      const noteNameTime = value
      this.setNoteNameTime(noteNameTime)
    }
  },
  setNoteNameTime: function (value) {
    this.state.noteNameTime = value
    localStorage.setItem('noteNameTime', value)
  },
  setNoteCount: function (value) {
    this.state.noteCount = value
    localStorage.setItem('noteCount', value)
  }
}
