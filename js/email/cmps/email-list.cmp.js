
import emailPreview from '../cmps/email-preview.cmp.js'
import {emailService} from '../services/email-service.js'


export default {
    name: 'emailList',
    props: ['emails'],

    template: `
    <section class="emails-list flex-grow">
            <ul>
                <h1 class="no-emails" v-if ='emails.length === 0'>
                    NO EMAILS TO SHOW
                </h1>
                   <email-preview  v-for="email in emails" :key="emails.id"  :email="email"/>
            </ul>
    </section> 
    `,
    data(){
        return{}

    },
    methods:{

    },
    
    components:{
        emailPreview
    }
}