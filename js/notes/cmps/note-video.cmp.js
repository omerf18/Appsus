export default {
    name: 'note-video',
    template: `
    <section>
       <div class="note flex column">
            <input class="note-title" type="text" maxlength="20" v-model="title">
<!-- 
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
            frameborder="0"></iframe>
            <div id="ytplayer"></div> -->

            <iframe width="420" height="315"
            src="https://www.youtube.com/watch?v=5LYrN_cAJoA&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa">
            </iframe>
         

            <iframe width="560" height="315" src="https://www.youtube.com/embed/5LYrN_cAJoA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
