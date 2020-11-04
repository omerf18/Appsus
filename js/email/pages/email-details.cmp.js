import { emailService } from "../services/email-service.js"





export default {
    name: 'emailDetails',
    template: `
    <section v-if="email"  class="email-Details">
       <div><h2>{{email.subject}}</h2><button>delete</button></div>
       <div><p>{{email.name}}</p></div>
       <p>{{email.body}}</p>
    </section> 
    `,
    data() {
        return {
            email:null

            
        }

    },
    created() {
        const {emailId} = this.$route.params
        console.log(emailId);
         emailService.getEmailById(emailId)
        .then(email => this.email = email)
        .then(email => console.log(email))
    }
    // components: {

    // }
}