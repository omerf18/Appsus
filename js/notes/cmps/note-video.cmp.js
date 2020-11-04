export default {
    name: 'note-video',
    template: `
    <section>
       <div class="note flex column">
            <input class="note-title" type="text" maxlength="18" v-model="title">

         
        </div>
    </section>
 `,
    data() {
        return {
            type: 'video',
            title: 'title',
            isPinned: true,
            info: 'www.youtube.com',
            style: {
                backgroundColor: ''
            }
        }
    },
}

