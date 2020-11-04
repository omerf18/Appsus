export default {
    props:['email'],
    template: `
        <section class="email-preview">
           <h3>{{email.name}}</h3>
           <h4>{{email.subject}}</h4>
           <small>{{email.body}}</small>
           <p>{{email.sentAt}}</p>
        </section>
        
        
    `,
    data(){
        return{
        currencyCode:''

        }


    },
    methods:{
        
    },

    computed: {
        getCurrency(){
           return this.book.listPrice.currencyCode
        }
     
    }
}