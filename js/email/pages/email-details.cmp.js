import { emailService } from "../services/email-service"





export default {
    name: 'emailDetails',
    template: `
    <section class="email-Details">
       <div><h2>{{email.subject}}</h2><button>delete</button></div>
       <div><p>{{email.name}}</p></div>
       <p>email.body</p>
    </section> 
    `,
    data() {
        return {
            email:null

            
        }

    },
    created() {
        const id = this.$route.params.emailId
        emailService.getEmailById(id)
        .then(email => this.email = email)
    }
    // components: {

    // }
}