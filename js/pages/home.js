export default {
    template: `
  <section class= "flex justify-center column align-center">
          <h1 class ="title">Let's Make It <span>Easy</span> Together</h1>
          <div class="enter-apps flex row">
              <router-link to="/email" class="enter-email flex column align-center"><span>EMAIL</span> <i class=" fas fa-envelope"></i></router-link>
              <router-link to="/notes" class="enter-notes flex column align-center"><span>NOTES</span><i class="far fa-sticky-note"></i></router-link>
          </div>
  </section>
  `,
  
    data() {
        return {
            
            

        }
    },
    computed: {
      

    },
    methods: {

    },
       
    created(){
       
    },
    components: {
      
    }
}