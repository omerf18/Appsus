
import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailCompose from './email-compose.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailNav from '../cmps/email-nav.cmp.js'



export default {
    name: 'emailApp',
    template: `
    <section class="email-app flex column space-between align-center">
        <email-filter @nameFilter="setFilter" @getReadFilter="setReadFilterBy"></email-filter>
        <div class="email-app-main-content flex row space-between">
            <email-nav @emailFilter="setEmailTypeToShow"></email-nav>
            <router-view :emails ="emailsToShow"></router-view>
        </div>
    </section> 
    `,
    data() {
        return {
            emails: null,
            currReadFilter: 'all',
            filterByName: '',
            emailTypeToShow: 'inbox',
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails)
            .then(emails => console.log(emails))

    },
    methods: {
        setFilter(byName) {
            // if(byName = '') return
            this.filterByName = byName
            
        },
        setReadFilterBy(value) {
            console.log(value);
            this.currReadFilter = value

        },
        setEmailTypeToShow(emailType){
            this.filterByName = '';
            this.currReadFilter = 'all';
            this.emailTypeToShow = emailType
        }
    },
    computed: {
        emailsToShow() {
            let filteredEmails = this.emails;
            if (this.filterByName) filteredEmails = filteredEmails.filter(email =>
                email.name.toLowerCase().includes(this.filterByName.toLowerCase()) ||
                email.body.toLowerCase().includes(this.filterByName.toLowerCase()) ||
                email.fromEmail.toLowerCase().includes(this.filterByName.toLowerCase()));
            if (this.currReadFilter !== 'all') {
                filteredEmails = filteredEmails.filter(email => {
                    if (this.currReadFilter === 'read') return email.isRead
                    else return !email.isRead
                })
            }
            
            else if(this.emailTypeToShow === 'inbox') filteredEmails =this.emails
            else if(this.emailTypeToShow === 'starred') filteredEmails =filteredEmails.filter(email => email.isStarred)
            else if(this.emailTypeToShow === 'sent') filteredEmails = filteredEmails.filter(email => email.isSent)
            console.log(filteredEmails);
            return filteredEmails;
        }
    },
    components: {
        emailList,
        emailCompose,
        emailFilter,
        emailNav

    }


}

