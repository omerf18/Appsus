
import { emailService } from '../services/email-service.js'
import { eventBus } from '../../services/event-bus.js'
export default {
    name: 'emailCompose',
    template: `
    <section class="email-compose-container flex column">
            <div class ="header-compose"><p>New Message</p></div>
            <input type="email" id="to" placeholder ="To:" v-model ='emailToSend.to'>
            <input type="text" id="subject" placeholder ="Subject:"v-model ='emailToSend.subject'>
            <textarea class="flex-grow" id="body" cols="20" rows="5" v-model ='emailToSend.body'></textarea>
            <div class= "email-compose-btn flex row space-between">
                <i @click ="sendEmail" class="far fa-paper-plane  send-icon"></i>
                <i class="fas fa-trash-alt  discard-icon" @click.prevent ="backToEmail"></i>
            </div>
           
    </section> 
    `,
    data() {
        return {
            emailToSend: {
                fromEmail: 'Dennis-Omer@gmail.com',
                to: '',
                subject: '',
                body: ''
            }

        }

    },
    methods: {
        sendEmail() {
            if (!this.emailToSend.to || !this.emailToSend.subject || !this.emailToSend.body) return
            const newEmail = this.emailToSend
            console.log(newEmail);
            this.$router.push('/email');
            emailService.sendNewEmail(newEmail)
            eventBus.$emit('show-msg',{txt:'Email sent' ,type:'Success'})
        },
        backToEmail() {
            const newDraft = this.emailToSend
            this.$router.push('/email');
            emailService.updateDraft(newDraft)
        }


    },
    components: {

    }
}