export default {
    props: ['note'],
    name: 'note-video',
    template: `
    <section>
       <div class="note flex column">
            <input class="note-title" type="text" maxlength="20" :value="note.title" placeholder="Watch this!">

            <iframe id="ytplayer" type="text/html" width="100" height="100"
            :src="note.info"
            frameborder="0"></iframe>
            <div id="ytplayer"></div>

        </div>
    </section>
  `,
    created() {
        // return note.info.replace('watch?v=', 'embed')
    }
}
