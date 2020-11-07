export default {
    props: ['note'],
    name: 'note-video',
    template: `
    <section>
            <iframe id="ytplayer" width="100" height="100"
            :src="note.info"
            frameborder="0"></iframe>
            <div id="ytplayer"></div>
    </section>
  `,
}
