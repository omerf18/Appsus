export default {
    name: 'noteType',
    template: `
    <section>
        
    <div class="note-header flex">
        <input type="text" class="note-input" placeholder="Take a note..">
         <form @change=noteTypeSelect>
        <label class="note-type btn" for="txt">txt
       <input type="radio" value="txt" v-show="showNoteType" id="txt" v-model="noteType">
       </label>
       <label class="note-type btn" for="img">img
       <input type="radio" value="img" v-show="showNoteType" id="img" v-model="noteType">
       </label>
       <label class="note-type btn" for="todos">todos
       <input type="radio" value="todos" v-show="showNoteType" id="todos" v-model="noteType">
       </label>
       <label class="note-type btn" for="video">video
       <input type="radio" value="video" v-show="showNoteType" id="video" v-model="noteType">
       </label>
        </form> 
    </div>
    
    </section>
    `,
    data() {
        return {
            noteType: null,
            showNoteType: false
        }
    },
    methods: {
        noteTypeSelect() {
            this.$emit('noteTypeSelect', this.noteType);
        }
    },
    created() {
        this.noteType = 'txt';
    }

}


