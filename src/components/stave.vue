<template>
  <div class="stave">
    <div class="stave-content">
      <div class="staff" ref="staff"></div>
    </div>
    <div class="noteName-content">
      <div class="noteName-wrapper" v-show="noteNameShow">
        <template v-if="lastNote.length">
          <span class="note-name" v-for="(note, index) in lastNote" :key="'note'+index">{{note.name}}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Vex from 'vexflow'
const VF = Vex.Flow
export default {
  name: 'stave',
  props: {
    type: {
      type: String,
      default: 'treble'
    }
  },
  data: function () {
    return {
      context: null,
      stave: null,
      note: {
        treble: [
          { value: 'C4', name: 'Do' },
          { value: 'D4', name: 'Re' },
          { value: 'E4', name: 'Mi' },
          { value: 'F4', name: 'Fa' },
          { value: 'G4', name: 'So' },
          { value: 'A4', name: 'La' },
          { value: 'B4', name: 'Si' },
          { value: 'C5', name: 'Do' },
          { value: 'D5', name: 'Re' },
          { value: 'E5', name: 'Mi' },
          { value: 'F5', name: 'Fa' },
          { value: 'G5', name: 'So' },
          { value: 'A5', name: 'La' },
          { value: 'B5', name: 'Si' }
        ],
        bass: [
          { value: 'C3', name: 'Do' },
          { value: 'D3', name: 'Re' },
          { value: 'E3', name: 'Mi' },
          { value: 'F3', name: 'Fa' },
          { value: 'G3', name: 'So' },
          { value: 'A3', name: 'La' },
          { value: 'B3', name: 'Xi' },
          { value: 'C4', name: 'Do' }
        ]
      },
      curNote: 'Do',
      noteNameShow: false,
      lastNote: []
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
      const renderer = new VF.Renderer(dom, VF.Renderer.Backends.SVG).resize(300, 150)
      this.context = renderer.getContext()
      this.context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed')
      this.stave = new VF.Stave(0, 0, 290)
      this.stave.addClef(this.type).addTimeSignature('4/4')
      this.stave.setContext(this.context).draw()
      this.voice = new VF.Voice({ num_beats: 4, beat_value: 4 })
    },
    getRandomNode: function (notes, except) {
      const length = notes.length
      const random = Math.random()
      const randomIndex = Math.ceil(random * length) - 1
      const note = notes[randomIndex]
      if (except && except.includes(note)) {
        return this.getRandomNode(notes, except)
      } else {
        return note
      }
    },
    start: function (count = 1) {
      const notes = this.note[this.type]
      let renderNotes = []
      for (let i = 0; i < count; i++) {
        let note = notes[i]
        if (this.lastNote[i] && this.lastNote[i].value) {
          note = this.getRandomNode(notes, [this.lastNote[i]])
        }
        this.lastNote[i] = note
        const noteValue = note.value.split('').join('/')
        renderNotes.push(noteValue)
      }
      this.render(renderNotes)
    },
    render: function (renderNotes) {
      this.context.clear()
      const restsNote = new VF.StaveNote({ keys: [this.restPosition], duration: 'qr', clef: this.type })
      const notes = [restsNote, restsNote, restsNote, restsNote]
      renderNotes.forEach((item, index) => {
        notes[index] = new VF.StaveNote({ keys: [item], duration: 'q', clef: this.type })
      })
      // const notes = [
      //   new VF.StaveNote({ keys: [note], duration: 'q', clef: this.type }),
      //   new VF.StaveNote({ keys: [this.restPosition], duration: 'qr', clef: this.type }),
      //   new VF.StaveNote({ keys: [this.restPosition], duration: 'qr', clef: this.type }),
      //   new VF.StaveNote({ keys: [this.restPosition], duration: 'qr', clef: this.type })
      // ]
      this.voice = new VF.Voice({ num_beats: 4, beat_value: 4 })
      this.voice.addTickables(notes)
      new VF.Formatter().joinVoices([this.voice]).format([this.voice], 260)
      this.stave.setContext(this.context).draw()
      this.voice.draw(this.context, this.stave)
    },
    setNoteNameShow: function (value) {
      this.noteNameShow = value
    }
  }
}
</script>

<style lang="scss" scoped>
.stave {
  .stave-content {
    width: 300px;
    margin: 0 auto;
  }
  .noteName-content {
    margin: 0 auto;
    width: 300px;
    line-height: 30px;
    height: 30px;
    .note-name {
      padding: 0 20px;
    }
  }
}
</style>
