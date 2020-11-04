
import emailPreview from '../cmps/email-preview.cmp.js'


export default {
    name: 'emailList',
    props: ['emails'],

    template: `
    <section class="emails-list flex-grow">
            <ul >
                   <email-preview  v-for="email in emails" :key="emails.id"  :email="email"/>
            </ul>
    </section> 
    `,
    data(){
        return{}

    },
    components:{
        emailPreview
    }
}