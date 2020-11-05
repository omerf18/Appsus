export default {
    props: ['note'],
    name: 'note-txt',
    template: `
    <section>
       <div class="note flex column">
            <input class="note-title btn" type="text" placeholder="Dont forget!" @change="edit()" v-model="note.title" maxlength="18">
            <textarea class="note-txt btn" rows="12" cols="6" @change="edit(note.id)" v-model="note.info"></textarea>
            <div class="flex space-between">
                <div class="note-bgc btn"> </div>
                <div class="note-pin btn"> </div>
            </div>
        </div>
    </section>
 `,
    methods: {
        edit() {
            this.$emit('editNote')
        }
    },
}