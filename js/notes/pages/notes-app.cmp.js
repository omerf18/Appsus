import noteType from '../cmps/note-type.cmps.js'

export default {
    template: `
    <section>
     <note-type @noteTypeSelect="getNoteInput($event)"></note-type>

    </section>
    `,
    data() {
        return {
            noteType: null,
        }
    },
    methods: {
        getNoteInput(note) {
            this.noteType = note;
        }
    },
    components: {
        noteType,
    }
}

