<<<<<<< HEAD
export default {}
=======
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

>>>>>>> 785e0369a516746e141be545735f38bd8919c6c6
