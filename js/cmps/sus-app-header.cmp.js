export default {
    template: `
    <section class="sus-app-header">
        <div class="container flex space-between">
    <h1><img class="logo-horse" src="../img/logo-horse.png" alt=""> SusApp</h1>
            <nav> 
                <router-link to="/" exact >Home</router-link>
                <router-link to="/email" exact >Email</router-link>
                <router-link to="/notes" exact >Notes</router-link>
                <router-link to="/about" exact >about</router-link>
            </nav>
</div>
    </section> 
    `,
}
