
import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailCompose from './email-compose.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailNav from '../cmps/email-nav.cmp.js'



export default {
    name: 'emailApp',
    template: `
    <section class="email-app flex column space-between align-center">
        <email-filter></email-filter>
        <div class="email-app-main-content flex row space-between">
            <email-nav></email-nav>
            <email-list :emails ="emails" ></email-list>
        </div>
            <router-view></router-view>
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
        emailFilter,
        emailNav

    }
}
