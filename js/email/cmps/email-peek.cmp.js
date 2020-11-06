import { utilService } from '../../services/util-service.js';
import { emailService } from '../services/email-service.js';

export default {
    name: 'email-peek',
    props: ['email'],
    template: `
    
        <li class="email-peek flex column space-between">
                <div class="peek-header flex space-between">
                    <h3 class="peek-subject"> {{ email.subject }} </h3>
                    <div class=peek-controls>
                        <button class= "remove-email" @click.prevent ="removeEmail"><i class=" trash fas fa-trash-alt icon"></i></button class= "expand-email" ><router-link :to="'email/' + email.id"><i class="fas fa-expand icon"></i></router-link>
                    </div>
                </div>
                <div class="peek-content">
                    <p class="peek-from"> {{ email.name }} <small class= "from-email" >{{email.fromEmail}}</small></p>
                    <p class="peek-body"> {{ email.body }} </p>
                </div>
            </li>
    `,
    methods: {
     
     
    },
    methods:{
        removeEmail(){
            const emailId = this.email.id;
            utilService.removeEmail(emailId);
        }
    },
    destroyed() {
      
    },
    created() {
        utilService.clearPeeked();
        this.email.isPeeked = true
    },
}