
import emailPreview from '../cmps/email-preview.cmp.js'


export default {
    name: 'emailList',
    props: ['emails'],

    template: `
    <section class="emails-list  ">
            <ul >
                <li v-for="email in emails" :key="emails.id"  >
                   <email-preview :email="email"/>
                </li>
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