
export default {
    name: 'emailFilter',
    template: `
    <section class="email-filter">
        <input type="text" placeholder="Search mail">
        <select >
            <option>All</option>
            <option>Read</option>
            <option>UnRead</option>  
         </select>
    </section> 
    `,
    data() {
        return {
            
        }

    },
    components: {

    }
}