import emailPeek from './email-peek.cmp.js'

export default {
    props:['email'],
    template: `
        <section @click="openEmailPeek" class="email-preview flex column  ">
            <li class= "flex space-between align-center flex-grow btn">  
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
        getCurrency(){
           return this.book.listPrice.currencyCode
        }
     
    },
    components:{
        emailPeek
    }

}