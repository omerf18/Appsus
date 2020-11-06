import { emailService } from "../services/email-service.js"





export default {
    name: 'emailDetails',
    template: `
    <section v-if="email"  class="email-Details">
       <div class="flex space-between" ><i class="icon fas fa-arrow-left" @click="backToEmail"></i><h2>{{email.subject}}</h2><i class=" trash fas fa-trash-alt icon" @click.prevent="backToEmail" @click="removeEmail"></i></div>
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
    },
    methods:{
        backToEmail(){
            this.$router.push('/email');
        },
        removeEmail(){
            const emailId = this.email.id;
            emailService.removeEmail(emailId);
        }
    }
    // components: {

    // }
}