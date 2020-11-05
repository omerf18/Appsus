export default {
    props: ['note'],
    name: 'note-img',
    template: `
    <section>
       <div class="note flex column">
            <input class="note-title" type="text" placeholder="I love this image!" :value="note.title" maxlength="22">
            <img class="note-img" :src="note.info">
            <div class="flex space-between">
                <div class="note-bgc"> </div>
                <div class="note-pin"> </div>
            </div>
        </div>
    </section>
 `,
}