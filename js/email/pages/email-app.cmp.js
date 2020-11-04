
import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'


export default {
    name: 'email-app',
    template: `
    <section class="email-app">
        <email-list :emails ="emails"></email-list>
    </section> 
    `,
    data() {
        return {
            emails: null
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails)
            .then(emails => console.log(emails))

    },
    components: {
        emailList,
    }
}
