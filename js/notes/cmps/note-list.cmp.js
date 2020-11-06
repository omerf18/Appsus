import noteTxt from '../cmps/note-types/note-txt.cmp.js'
import noteImg from '../cmps/note-types/note-img.cmp.js'
import noteTodos from '../cmps/note-types/note-todos.cmp.js'
import noteVideo from '../cmps/note-types/note-video.cmp.js'

export default {
    name: 'noteList',
    props: ['notes'],
    template: `
            <ul class="notes-list flex row">
                   <li v-for="note in notes" :key="note.id">
                        <component :note="note" :is="note.type" @colorNote="changeBgc" @editNote="noteToEdit" @removeNote="noteToRemove" @updateTodo="todoToUpdate">
                             </component>
                   </li>
            </ul>
    `,
    methods: {
        changeBgc(noteId, color) {
            this.$emit('colorNote',noteId, color);
        },
        todoToUpdate(noteId, todoId) {
            this.$emit('updateTodo', noteId, todoId);
        },
        noteToRemove(noteId) {
            this.$emit('removeNote',noteId);
        },
        noteToEdit() {
            this.$emit('editNote');
        }
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo
    }
}