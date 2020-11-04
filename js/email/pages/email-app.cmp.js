
import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'



export default {
    name: 'emailApp',
    template: `
    <section class="email-app flex column space-between align-center">
        <email-filter></email-filter>
        <div class="email-app-main-content flex row space-between">
            <nav class="email-nav flex" >
              <button>+ Compose</button>
                <p>Inbox</p>
                <p>Starred</p>
                <p>Sent Mail</p>
                <p>Drafts</p>
            </nav>    
            <email-list :emails ="emails" ></email-list>
        </div>
            <email-compose></email-compose>
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
        emailCompose,
        emailFilter
    }
}
