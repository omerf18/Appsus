import noteTxt from '../cmps/note-types/note-txt.cmp.js'
import noteImg from '../cmps/note-types/note-img.cmp.js'
import noteTodos from '../cmps/note-types/note-todos.cmp.js'
import noteVideo from '../cmps/note-types/note-video.cmp.js'

export default {
    name: 'noteList',
    props: ['notes'],
    template: `
        <section class="flex wrap space-between">
        <div v-for="note in notes" :key="note.id">
            <div class="note flex column space-between" :style="{ 'background-color': note.color }">
                <input class="note-title btn" type="text" placeholder="Dont forget!" @change="edit" v-model="note.title" maxlength="18">
                <component  :note="note" :is="note.type" @editNote="noteToEdit" @updateTodo="todoToUpdate"></component>
                <div class="flex space-between">
                    <div class="colorpick-container flex">
                    <i class="fas fa-brush icon"></i>
                        <div class="flex colorpick-container">
                            <div class="note-bgc bgc0 btn" @click="changeBgc(note.id,'#fafafa')"></div>    
                            <div class="note-bgc bgc1 btn" @click="changeBgc(note.id,'#9df3c4')"></div>
                            <div class="note-bgc bgc2 btn" @click="changeBgc(note.id,'#b2dffb')"></div>
                            <div class="note-bgc bgc3 btn" @click="changeBgc(note.id,'#e7a4e4')"></div>
                            <div class="note-bgc bgc4 btn" @click="changeBgc(note.id,'#ffc55c')"></div>
                        </div>
                </div>
                <i class="fas fa-trash-alt icon" @click="noteToRemove(note.id)"></i>
                <i class="note-pin fas fa-thumbtack icon"></i>
            </div>
        </div>
        </div>
        </section>
    `,
        methods: {
        edit() {
            this.$emit('editNote');
        },
        changeBgc(noteId, color) {
            this.$emit('colorNote', noteId, color);
        },
        todoToUpdate(noteId, todoId) {
            this.$emit('updateTodo', noteId, todoId);
        },
        noteToRemove(noteId) {
            this.$emit('removeNote', noteId);
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