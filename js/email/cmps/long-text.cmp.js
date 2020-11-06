


export default {
    props: ["email"],
    template: `
      <section>
        <p>{{textToShow}}</p>
        <button  class=" btn show-more-btn" @click="isShowAll = !isShowAll" @click.prevent="openEmailPeek">{{buttonBody}}</button>
      </section>
      `,
    data() {
        return {
            isShowAll: false,
         
        };
    },
    computed: {
        textToShow() {
            const body = this.email.body;
            if (body.length > 30 ) {
                return body.substring(0, 30) + "...";
            } else return body;
        },
        buttonBody() {
            if (!this.isShowAll) {
                return "Read more...";
            } else {
                return "Read Less";
            }
        },
    },
    methods:{
        openEmailPeek() {
            this.email.isPeeked = !this.email.isPeeked
            this.email.isRead = true
        },
        


    }
};