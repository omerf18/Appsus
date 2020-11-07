import emailPeek from './email-peek.cmp.js'
import longText from './long-text.cmp.js'
import { utilService } from '../../services/util-service.js'
import { eventBus } from '../../services/event-bus.js'
import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    template: `
        <section  class="email-preview flex column"  :class="{read:email.isRead}">
            <li class = "email-prev-container flex align-center flex-grow btn space-between" > 
         
                    <i class="star fas fa-star" @click="toggleStared(email.id)" :class="{stared:email.isStared}"></i>
                    <i class="read-icon fas fa-envelope" @click="toggleRead(email.id)" :class ="{readied:email.isRead}"></i>
                    <div class="email prev-content flex align-center flex-grow btn">
                        <div class = "email-name" :style ="{'background-color':randomBgc}">{{email.name[0]}}</div>
                        <div class ="email-subject">{{email.subject}}</div>
                        <div class="email-body"><long-text :email="email" class ="flex row" ></long-text></div>
                    </div>
                    <div>
                        <div class="sent-at">{{email.sentAt}}</div>
                        <i class="trash-icon fas fa-trash-alt icon" @click.prevent ="removeEmail"></i>

                    </div>
            </li>
          
           <email-peek v-if="email.isPeeked" :email="email"></email-peek>
        </section>
        
        
    `,
    data() {
        return {
            randomBgc:'#e7a4e4',
            colors:[
                '#e7a4e4',
                '#ffc55c',
                '#b2dffb',
                '#9df3c4'
            ]


        }


    },
    methods: {
        openEmailPeek() {
            this.email.isPeeked = !this.email.isPeeked
        },
        toggleStared(emailId) {
            emailService.updateStared(emailId)
        },
        toggleRead(emailId) {
            emailService.updateRead(emailId)
        },
        removeEmail() {
            const emailId = this.email.id;
            emailService.removeEmail(emailId);
        },
    },

    computed: {

    },
    created() {
       const randomNum = Math.floor(Math.random() * 4) ;
        this.randomBgc = this.colors[randomNum]
        console.log(this.randomBgc);
        


    },

    components: {
        emailPeek,
            longText
    }

}

