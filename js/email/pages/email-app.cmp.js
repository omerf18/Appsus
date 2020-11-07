
import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailCompose from './email-compose.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailNav from '../cmps/email-nav.cmp.js'
import userMsgCmp from '../../cmps/user-msg.cmp.js'
import userMsg from '../../cmps/user-msg.cmp.js'



export default {
    name: 'emailApp',
    template: `
    <section class="email-app flex column space-between align-center">
        <email-filter @nameFilter="setFilter" @getReadFilter="setReadFilterBy"></email-filter>
        <h3>{{emailTypeToShow}}</h3>
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
            emailTypeToShow: 'Inbox',
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails)
            .then(emails => console.log(emails))

    },
    methods: {
        setFilter(byName) {
            this.filterByName = byName
        },
        setReadFilterBy(value) {
            console.log(value);
            this.currReadFilter = value
        },
        setEmailTypeToShow(emailType) {
            this.filterByName = '';
            this.currReadFilter = 'all';
            this.emailTypeToShow = emailType
        }
    },
    computed: {
        emailsToShow() {
            let filteredEmails = this.emails;
            if (this.emailTypeToShow === 'Inbox') filteredEmails = this.emails
            if (this.emailTypeToShow === 'Stared') filteredEmails = filteredEmails.filter(email => email.isStared && !email.isDraft)
            if (this.emailTypeToShow === 'Sent') filteredEmails = filteredEmails.filter(email => email.isSent && !email.isDraft)
            if (this.emailTypeToShow === 'Draft') filteredEmails = filteredEmails.filter(email => email.isDraft)
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
            console.log('filter', filteredEmails);
            this.$router.push('/email');
            return filteredEmails;
        }
    },
    components: {
        emailList,
        emailCompose,
        emailFilter,
        emailNav,
        userMsg

    }


}

