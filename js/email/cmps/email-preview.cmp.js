import emailPeek from './email-peek.cmp.js'
import longText from './long-text.cmp.js'
import {utilService} from '../../services/util-service.js'
import {eventBus} from '../../services/event-bus.js'
import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    template: `
        <section  class="email-preview flex column"  :class="{read:email.isRead}">
            <li class = "email-prev-container flex align-center flex-grow btn space-between" > 
         
                    <i class="star fas fa-star" @click="toggleStared(email.id)" :class="{stared:email.isStared}"></i>
              
           
                    <div class="email prev-content flex align-center flex-grow btn">
                        <div class = "email-name">{{email.name}}</div>
                        <div class ="email-subject">{{email.subject}}</div>
                        <div class="email-body"><long-text :email="email" class ="flex row" ></long-text></div>
                    </div>
                        <div class="sent-at">{{email.sentAt}}</div>
            </li>
          
           <email-peek v-if="email.isPeeked" :email="email"></email-peek>
        </section>
        
        
    `,
    data() {
        return {
            

        }


    },
    methods: {
        openEmailPeek() {
            this.email.isPeeked = !this.email.isPeeked
        },
        toggleStared(emailId) {
            emailService.updateStared(emailId)
            
        }

    },

    computed: {
        // isStared() {
        //     return this.email.isStared;
        // }

    },
    components: {
        emailPeek,
        longText
    }

}