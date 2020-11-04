
import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
// import emailNav from '../cmps/email-nav.cmp.js'


export default {
    name: 'emailApp',
    template: `
    <section class="email-app flex row space-between">
        <nav class="email-nav flex" >
          <button>+ Compose</button>
            <p>Inbox</p>
            <p>Starred</p>
            <p>Sent Mail</p>
            <p>Drafts</p>
        </nav>    
        <email-list :emails ="emails" ></email-list>
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
        // emailNav
    }
}
