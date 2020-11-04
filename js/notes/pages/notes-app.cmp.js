import noteType from '../cmps/note-type.cmps.js'

export default {
    template: `
    <section>
     <note-type/>

    </section>
    `,
    data() {
        return {
            noteType: null,
        }
    },
    components: {
        noteType,
    }
}

