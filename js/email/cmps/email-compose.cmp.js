

export default {
    name: 'emailCompose',
    template: `
    <section class="email-compose">
    <form class ="email-compose-container flex column">
            <div class ="header-compose"><p>New Message</p></div>
            <input type="text" id="from" placeholder ="from:">
            <input type="email" id="to" placeholder ="To:">
            <input type="text" id="subject" placeholder ="Subject:">
            <textarea id="body" cols="20" rows="5"></textarea>
            <div class= "email-compose-btn flex row space-between">
                 <button>send</button>
                 <button>Discard</button>
            </div>
           
        </form>
    </section> 
    `,
    data() {
        return {

        }

    },
    components: {

    }
}