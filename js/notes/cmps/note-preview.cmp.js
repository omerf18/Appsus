//dennis


export default {
    props:['note'],
    template: `
            <li class= "note-preview flex column space-between flex-grow btn bgc1">  
                <h3>noteType:{{note.type}}</h3>
                <h4>{{note.title}}</h4>
                <small>{{note.info}}</small>
                <p>{{note.isPinned}}</p>
            </li>
         
    `,
    data(){
        return{
        

        }


    },
    methods:{
       
        
    },

    computed: {
      
     
    },
    components:{
      
    }

}