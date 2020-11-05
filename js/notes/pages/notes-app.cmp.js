import noteType from '../cmps/note-type.cmp.js';
import noteTxt from '../cmps/note-txt.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';

export default {
    template: `
    <section>
    <note-type @noteTypeSelect="getNoteInput($event)"></note-type>
    <note-txt/>
    <note-img/>
    <note-todos/>
    <note-video/>
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
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo
    }
}

