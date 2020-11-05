import { emailService } from "../services/email-service.js"




export default {
    name: 'emailNav',
    template: `
    <nav class="email-nav flex" >
    
            <router-link to="/email/compose"><img src="../../img/compose-plus.png"/> Compose</router-link>
            <router-link  @click="setEmailFilter('inbox')" to="/email"><div>Inbox<small>{{unReadEmailsCount}}</small></div></router-link>
            <div to="/email" @click="setEmailFilter('sent')"><div >Sent Mail</div></div>
            <div to="/email" @click="setEmailFilter('stared')"><div >Stared</div></div>
            <div to="/email" @click="setEmailFilter('drafts')"><div >Drafts</div></div>
    </nav>  
    `,
    data() {
        return {



        }

    },
    computed: {
        unReadEmailsCount() {
            const unRead = emailService.getUnreadCount()
            if (unRead === 0) return ''
            return unRead
        }
    },
    methods:{
        setEmailFilter(emailType){
            this.$emit('emailFilter', emailType)
        }
    }
    // created() {

    // }
    // components: {

    // }
}