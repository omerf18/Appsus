import { emailService } from '../services/email-service.js';

export default {
    name: 'email-peek',
    props: ['email'],
    template: `
    
        <li class="email-peek flex row space-between">
                <div class="peek-header flex space-between">
                    <h3 class="peek-subject"> {{ email.subject }} </h3>
                    <div class=peek-controls>
                        <button @click.prevent ="removeEmail">delete</button>  <router-link :to="'email/' + email.id">expand</router-link>
                    </div>
                </div>
                <p class="peek-from"> {{ email.name }} <span>{{email.fromEmail}}</span></p>
                <p class="peek-body"> {{ email.body }} </p>
            </li>
    `,
    methods: {
     
     
    },
    methods:{
        removeEmail(){
            const emailId = this.email.id;
            emailService.removeEmail(emailId);
        }
    },
    destroyed() {
      
    },
    created() {
        emailService.clearPeeked();
        this.email.isPeeked = true
    },
}