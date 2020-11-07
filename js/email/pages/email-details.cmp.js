import { emailService } from "../services/email-service.js"





export default {
    name: 'emailDetails',
    template: `
    <section v-if="email"  class="email-Details flex column ">
       <div class="details-header flex space-between" ><i class="icon fas fa-arrow-left" @click="backToEmail"></i><h2>{{email.subject}}</h2><i class=" trash fas fa-trash-alt icon" @click.prevent="backToEmail" @click="removeEmail"></i></div>
       <div><p class="details-name"><span>from:</span> {{email.name}}</p><hr/><span>Email address:</span><span class="details-email"><{{email.fromEmail}}></span><hr/></div>
        
       <p class="details-body">{{email.body}}</p>
    </section> 
    `,
    data() {
        return {
            email: null


        }

    },
    created() {
        const { emailId } = this.$route.params
        console.log(emailId);
        emailService.getEmailById(emailId)
            .then(email => this.email = email)
            .then(email => console.log(email))
    },
    methods: {
        backToEmail() {
            this.$router.push('/email');
        },
        removeEmail() {
            const emailId = this.email.id;
            emailService.removeEmail(emailId);
        }
    }
    // components: {

    // }
}