export default {
    props: ['note'],
    name: 'note-txt',
    template: `
    <section>
       <div class="note flex column">
            <input class="note-title btn" type="text" placeholder="Dont forget!" @change="edit" v-model="note.title" maxlength="18">
            <textarea class="note-txt btn" rows="12" cols="6" @change="edit" v-model="note.info"></textarea>
            <div class="flex space-between">
            <i class="fas fa-brush icon"></i>
                <i class="fas fa-trash-alt icon"></i>
                <i class="note-pin fas fa-thumbtack icon"></i>
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