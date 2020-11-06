export default {
    props: ['note'],
    name: 'note-txt',
    template: `
    <section>
       <div class="note flex column" :style="{ 'background-color': note.color }">
            <input class="note-title btn" type="text" placeholder="Dont forget!" @change="edit" v-model="note.title" maxlength="18">
            <textarea class="note-txt btn" rows="12" cols="6" @change="edit" v-model="note.info"></textarea>
            <div class="flex space-between">
                <div class="colorpick-container flex">
                    <i class="fas fa-brush icon"></i>
                    <div class="flex colorpick-container">
                        <div class="note-bgc bgc0 btn" @click="color(note.id,'#fafafa')"></div>    
                        <div class="note-bgc bgc1 btn" @click="color(note.id,'#9df3c4')"></div>
                        <div class="note-bgc bgc2 btn" @click="color(note.id,'#b2dffb')"></div>
                        <div class="note-bgc bgc3 btn" @click="color(note.id,'#e7a4e4')"></div>
                        <div class="note-bgc bgc4 btn" @click="color(note.id,'#ffc55c')"></div>
                    </div>
            </div>
            <i class="fas fa-trash-alt icon" @click="remove(note.id)"></i>
            <i class="note-pin fas fa-thumbtack icon"></i>
            </div>
        </div>
    </section>
 `,
    methods: {
        color(noteId,color) {
            this.$emit('colorNote',noteId, color);
        },
        remove(noteId) {
            this.$emit('removeNote', noteId);
        },
        edit() {
            this.$emit('editNote');
        }
    },
}


