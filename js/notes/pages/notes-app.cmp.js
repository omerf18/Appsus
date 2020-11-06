import { noteService } from '../services/note-service.js'
import noteType from '../cmps/note-type.cmp.js';
import noteList from '../cmps/note-list.cmp.js';

export default {
    name: 'app',
    template: `
    <section>
    <note-type @createNewNote="addNote"/>
    <note-list v-if="notes" @colorNote="changeNoteColor" @editNote="noteToEdit" @removeNote="noteToRemove" @updateTodo="todoToUpdate" :notes='notes'/>
    </section>
    `,
    data() {
        return {
            notes: null
        }
    },
    methods: {
        changeNoteColor(noteId, color) {
            noteService.colorNote(noteId, color);
        },
        todoToUpdate(noteId, todoId) {
            noteService.updateTodo(noteId, todoId);
        },
        addNote(type, info) {
            noteService.createNote(type, info);
        },
        noteToRemove(noteId) {
            noteService.removeNote(noteId);
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
