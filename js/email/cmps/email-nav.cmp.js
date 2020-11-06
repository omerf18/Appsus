import { emailService } from "../services/email-service.js"




export default {
    name: 'emailNav',
    template: `
    <nav class="email-nav flex column" >
    
            <router-link to="/email/compose" class="compose-ctr mr-5"><img src="../../img/compose-plus.png"/> Compose</router-link>
            <a class="folder-btn" @click="setEmailFilter('inbox')" to="/email"><i class="icon fas fa-inbox mr-5"></i><span>Inbox<small>{{unReadEmailsCount}}</small></span></a>
            <a class="folder-btn" to="/email" @click="setEmailFilter('sent')"><i class="icon fas fa-envelope mr-5"></i><span >Sent Mail</span></a>
            <a class="folder-btn" to="/email" @click="setEmailFilter('stared')"><i class=" icon fas fa-star mr-5"></i><span >Stared</span></a>
            <a class="folder-btn" to="/email" @click="setEmailFilter('draft')"><i class=" icon fas fa-file mr-5"></i><span >Drafts</span></a>
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
            console.log(emailType);
            this.$emit('emailFilter', emailType)
        }
    }
    // created() {

    // }
    // components: {

    // }
}