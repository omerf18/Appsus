import emailPeek from './email-peek.cmp.js'

export default {
    props:['email'],
    template: `
        <section @click="openEmailPeek" class="email-preview flex column  ">
            <li class= "flex space-between align-center flex-grow btn">  
            <i @click.prevent.stop="onStarClicked" class="fas fa-star mr-5 ml-5 " :class="starClass"></i>
                <h3>{{email.name}}</h3>
                <h4>{{email.subject}}</h4>
                <small>{{email.body}}</small>
                <p>{{email.sentAt}}</p>
            </li>
          
           <email-peek v-if="email.isPeeked" :email="email"> </email-peek>
        </section>
        
        
    `,
    data(){
        return{
        

        }


    },
    methods:{
        openEmailPeek(){
            this.email.isPeeked = !this.email.isPeeked
        }
        
    },

    computed: {
      starClass(){
          return{stared:(this.email.isStared)}
      }

     
    },
    components:{
        emailPeek
    }

}