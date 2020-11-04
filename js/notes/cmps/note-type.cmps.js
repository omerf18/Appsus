export default {
    template: `
    <section>
        
    <div class="note-header flex">
       <input type="text" class="note-input" placeholder="Take a note..">
       <label class="note-type btn" for="txt">txt</label>
       <input type="radio" value="txt" id="txt" v-show="showNoteType" v-model="noteType">
       <label class="note-type btn" for="img">img</label>
       <input type="radio" value="img" id="img" v-show="showNoteType" v-model="noteType">
       <label class="note-type btn" for="todo">todo</label>
       <input type="radio" value="todo" id="todo" v-show="showNoteType" v-model="noteType">
       <label class="note-type btn" for="video">video</label>
       <input type="radio" value="video"id="video" v-show="showNoteType" v-model="noteType">
    </div>

    </section>
    `,
    data() {
        return {
            noteType: null,
            showNoteType: false
        }
    }

}
