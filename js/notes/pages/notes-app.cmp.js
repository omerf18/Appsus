import { noteService } from '../services/note-service.js'
import noteType from '../cmps/note-type.cmp.js';
import noteList from '../cmps/note-list.cmp.js';

export default {
    name: 'app',
    template: `
    <section>
    <note-type @createNewNote="addNote"/>
    <note-list v-if="notes" @editNote="noteToEdit" :notes='notes'/>
    </section>
    `,
    data() {
        return {
            notes: null
        }
    },
    methods: {
        addNote(type, info) {
            noteService.createNote(type, info);
        },
        noteToEdit() {
            noteService.editNote();
        }
    },
    created() {
        noteService.getNotes()
            .then(notes => {
                this.notes = notes
            })
    },
    components: {
        noteType,
        noteList
    }
}
