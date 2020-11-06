export default {
    props: ['note'],
    name: 'note-txt',
    template: `
            <textarea class="note-txt btn" rows="12" cols="6" @change="edit" v-model="note.info"></textarea>
 `,
    methods: {
        edit() {
            this.$emit('editNote');
        }
    }
}


