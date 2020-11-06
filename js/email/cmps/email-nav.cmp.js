import { emailService } from "../services/email-service.js"




export default {
    name: 'emailNav',
    template: `
    <nav class="email-nav flex column" >
    
            <router-link to="/email/compose" class="compose-ctr"><img src="../../img/compose-plus.png"/> Compose</router-link>
            <router-link class="folder-btn" @click="setEmailFilter('inbox')" to="/email"><i class="icon fas fa-inbox"></i><span>Inbox<small>{{unReadEmailsCount}}</small></span></router-link>
            <span class="folder-btn" to="/email" @click="setEmailFilter('sent')"><i class="icon fas fa-envelope"></i><span >Sent Mail</span></span>
            <span class="folder-btn" to="/email" @click="setEmailFilter('stared')"><i class=" icon fas fa-star"></i><span >Stared</span></span>
            <span class="folder-btn" to="/email" @click="setEmailFilter('drafts')"><i class=" icon fas fa-file"></i><span >Drafts</span></span>
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