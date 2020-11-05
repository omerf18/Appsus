
import {emailService} from '../services/email-service.js'
export default {
    name: 'emailCompose',
    template: `
    <section class="email-compose">
    <form class ="email-compose-container flex column">
            <div class ="header-compose"><p>New Message</p></div>
            <input type="email" id="to" placeholder ="To:" v-model ='emailToSend.to'>
            <input type="text" id="subject" placeholder ="Subject:"v-model ='emailToSend.subject'>
            <textarea id="body" cols="20" rows="5" v-model ='emailToSend.body'></textarea>
            <div class= "email-compose-btn flex row space-between">
                 <button @click.prevent ="sendEmail">send</button>
                 <button @click.prevent="backToEmail" >Discard</button>
            </div>
           
        </form>
    </section> 
    `,
    data() {
        return {
            emailToSend:{
                fromEmail: 'Dennis-Omer@gmail.com',
                to:'',
                subject: '',
                body: ''
            }

        }

    },
    methods:{
        sendEmail(){
            const newEmail = this.emailToSend
            emailService.sendNewEmail(newEmail)
            this.$router.push('/email');
        },
        backToEmail(){
            this.$router.push('/email');
        }


    },
    components: {

    }
}