export default {
    props: ['note'],
    name: 'note-img',
    template: `
    <section>
       <div class="note flex column">
            <input class="note-title" type="text" placeholder="I love this image!" @change="edit" v-model="note.title" maxlength="22">
            <img class="note-img" :src="note.info">
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
    }
}