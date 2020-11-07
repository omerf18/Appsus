import { emailService } from "../services/email-service.js"




export default {
    name: 'emailNav',
    template: `
    <nav class="email-nav flex" >
    
            <router-link to="/email/compose" class="compose-ctr mr-5"><img src="img/compose-plus.png"/> Compose</router-link>
            <a class="folder-btn" @click="setEmailFilter('Inbox')" ><i class="icon fas fa-inbox "></i><span class="flex align-center" >Inbox<small>({{unReadEmailsCount}})</small></span></a>
            <a class="folder-btn"@click="setEmailFilter('Sent')" ><i class="icon fas fa-envelope "></i><span >Sent Mail</span></a>
            <a class="folder-btn" @click="setEmailFilter('Stared')" ><i class=" icon fas fa-star "></i><span >Stared</span></a>
            <a class="folder-btn" @click="setEmailFilter('Draft')" ><i class=" icon fas fa-file "></i><span >Drafts</span></a>
    </nav>  
    `,
    data() {
        return {
            isActive: false

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
           if(emailType) this.isActive = !this.isActive
            console.log(emailType);
            this.$emit('emailFilter', emailType)
            this.$router.push('/email');
        }
    }
   
}