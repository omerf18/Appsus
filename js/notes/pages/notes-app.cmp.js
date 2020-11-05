import noteType from '../cmps/note-type.cmp.js';
// import noteTxt from '../cmps/note-types/note-txt.cmp.js';
// import noteImg from '../cmps/note-types/note-img.cmp.js';
// import noteTodos from '../cmps/note-types/note-todos.cmp.js';
// import noteVideo from '../cmps/note-types/note-todos.cmp.js';
import {noteService} from '../services/note-service.js'
import noteList from '../cmps/note-list.cmp.js'

export default {
    template: `
    <section>
      <note-type @noteTypeSelect="getNoteInput"></note-type> 
    <!-- <note-txt/>
    <note-img/>
    <note-todos :notes ='notes'/>
    <note-video/>  -->
    <note-list :notes='notes'/>
    </section>
    `,
    data() {
        return {
            noteType: null,
            notes: null
        }
    },
    methods: {
        getNoteInput(noteType) {
            console.log(noteType);
            this.noteType = noteType;
        }
    },
    created(){
        noteService.getNotes()
        .then(notes => this.notes = notes)
        .then(notes => console.log(notes))
    },
    components: {
        noteType,
        noteList,
    }
}


