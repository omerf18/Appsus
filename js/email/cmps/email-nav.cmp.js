




export default {
    name: 'emailNav',
    template: `
    <nav class="email-nav flex" >
    <router-link class="send-email-btn" to="compose"> <img src="../../img/compose-plus.png"/> Compose </router-link>
                <p>Inbox</p>
                <p>Starred</p>
                <p>Sent Mail</p>
                <p>Drafts</p>
    </nav>  
    `,
    data() {
        return {
            

            
        }

    },
    created() {

    }
    // components: {

    // }
}