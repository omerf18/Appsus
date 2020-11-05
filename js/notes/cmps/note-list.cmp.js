
import notePreview from '../cmps/note-preview.cmp.js'
//dennis 

export default {
    name: 'noteList',
    props: ['notes'],

    template: `
            <ul class="notes-list flex row" >
                   <note-preview  v-for="note in notes" :key="note.id" :note ='note'/>
            </ul>
    `,
    data(){
        return{}

    },
    methods:{

    },
    components:{
        notePreview
    }
}