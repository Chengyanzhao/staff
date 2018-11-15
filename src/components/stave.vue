<template>
  <div class="stave">
    <div class="staff" ref="staff"></div>
  </div>
</template>

<script>
import Vex from 'vexflow'
const VF = Vex.Flow
export default {
  name: 'stave',
  props: {
    type: { // high:treble low bass
      type: String,
      default: 'treble'
    }
  },
  data: function () {
    return {
      context: null,
      stave: null,
      note: {
        treble: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5'],
        bass: ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3']
      }
    }
  },
  computed: {
    restPosition: function () {
      return this.type === 'treble' ? 'c/5' : 'e/3'
    }
  },
  mounted: function () {
    this._initStave()
  },
  methods: {
    _initStave: function () {
      const dom = this.$refs.staff
      const renderer = new VF.Renderer(dom, VF.Renderer.Backends.SVG).resize(350, 150)
      this.context = renderer.getContext()
      this.context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed')
      this.stave = new VF.Stave(0, 0, 340)
      this.stave.addClef(this.type).addTimeSignature('4/4')
      this.stave.setContext(this.context).draw()
      this.voice = new VF.Voice({ num_beats: 4, beat_value: 4 })
    },
    start: function (isDefault) {
      const notes = this.note[this.type]
      let note = notes[0]
      if (!isDefault) {
        const length = notes.length
        const random = Math.random()
        const randomIndex = Math.ceil(random * length) - 1
        note = notes[randomIndex]
      }
      note = note.split('').join('/')
      this.render(note)
    },
    render: function (note) {
      this.context.clear()
      var notes = [
        new VF.StaveNote({ keys: [note], duration: 'q', clef: this.type }),
        new VF.StaveNote({ keys: [this.restPosition], duration: 'qr', clef: this.type }),
        new VF.StaveNote({ keys: [this.restPosition], duration: 'qr', clef: this.type }),
        new VF.StaveNote({ keys: [this.restPosition], duration: 'qr', clef: this.type })
      ]
      this.voice = new VF.Voice({ num_beats: 4, beat_value: 4 })
      this.voice.addTickables(notes)
      new VF.Formatter().joinVoices([this.voice]).format([this.voice], 340)
      this.stave.setContext(this.context).draw()
      this.voice.draw(this.context, this.stave)
    }
  }
}
</script>
