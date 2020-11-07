export default {
    template: `
    <section class="sus-app-header">
        <div class="header-content container flex space-between">
        <router-link class="logo-link" to="/" exact ><h1 class="flex align-center"><img class="logo-horse" src="img/logo-horse.png" alt=""> SusApp</h1></router-link>
            <nav class="pages-link flex align-center"> 
                <router-link class="align-self" to="/" exact >Home</router-link>
                <router-link  to="/email" exact >Email</router-link>
                <router-link   to="/notes" exact >Notes</router-link>
                <router-link  to="/about" exact >about</router-link>
            </nav>
</div>
    </section> 
    `,
}
