export default {
    name: 'noteType',
    template: `
    <section>
       <div class="note-header flex">
       <input type="text" class="note-input" v-model="noteInput" @change=newNote placeholder="Take a note..">

       <form>
       <label class="note-type btn" for="txt"> <i class="far fa-comment-alt icon"></i>
       <input type="radio" value="noteTxt" v-show="showNoteType" id="txt" v-model="noteType">
       </label>
       <label class="note-type btn" for="img"> <i class="far fa-image icon"></i>
       <input type="radio" value="noteImg" v-show="showNoteType" id="img" v-model="noteType">
       </label>
       <label class="note-type btn" for="todos"> <i class="fas fa-list-ul icon"></i>
       <input type="radio" value="noteTodos" v-show="showNoteType" id="todos" v-model="noteType">
       </label>
       <label class="note-type btn" for="video"><i class="far fa-play-circle icon"></i>
       <input type="radio" value="noteVideo" v-show="showNoteType" id="video" v-model="noteType">
       </label>
       </form> 
    </div>
    </section>
    `,
    data() {
        return {
            noteType: null,
            showNoteType: false,
            noteInput: null
        }
    },
    methods: {
        newNote() {
            this.$emit('createNewNote', this.noteType, this.noteInput);
        },
    },
    created() {
        this.noteType = 'noteTxt';
    }

}


