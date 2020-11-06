
export default {
    name: 'emailFilter',
    template: `
    <section class="email-filter flex row justify-center align-center" >
      
            <input class="name-sort" type="text" placeholder="Search mail" v-model="byName" @keyup.enter.prevent="setNameFilter">
            <div class="read-sort">
                <label for="all"> All <input type="radio" name ="filterRead" @change="setReadFilter" value="all" checked> </label>
                <label for="read"> Read <input type="radio" name ="filterRead" @change="setReadFilter" value="read"> </label>
                <label for="unread"> Unread <input type="radio" name ="filterRead" @change="setReadFilter" value="unread"> </label>
            </div>
 
    </section> 
    `,
    data() {
        return {
                byName: ''
        }

    },
    methods:{
        setNameFilter(){
            this.$emit("nameFilter",this.byName)
        },
        setReadFilter(event) {
            this.$emit('getReadFilter', event.target.value) 
        },
    },
    components: {

    }
}