export default {
    props: ['note'],
    name: 'note-video',
    template: `
    <section>
       <div class="note flex column">
            <input class="note-title" type="text" maxlength="20" @change="edit" v-model="note.title" placeholder="Watch this!">
            <iframe id="ytplayer" type="text/html" width="100" height="100"
            :src="note.info"
            frameborder="0"></iframe>
            <div id="ytplayer"></div>
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
