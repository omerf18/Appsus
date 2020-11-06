export default {
    props: ['note'],
    name: 'note-img',
    template: `
    <section>
            <img class="note-img" :src="note.info">
    </section>
 `,
}