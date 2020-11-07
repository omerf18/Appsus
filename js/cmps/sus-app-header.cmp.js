export default {
    template: `
    <section class="sus-app-header">
        <div class="header-content container flex space-between">
        <router-link class="logo-link" to="/" exact ><h1 class="flex align-center"><img class="logo-horse" src="img/logo-horse.png" alt=""> SusApp</h1></router-link>
            <nav class="nav pages-link flex align-center"> 
                <router-link class="align-self" to="/" exact >Home</router-link>
                <router-link  to="/email" exact >Email</router-link>
                <router-link   to="/notes" exact >Notes</router-link>
                <router-link  to="/about" exact >about</router-link>
            </nav>

            <div class="phone-nav-btn btn" @click="showPhoneNav = !showPhoneNav">|||</div>
            <nav class="phone-nav pages-link flex column align-center" :class="{'phone-nav-show': showPhoneNav}"> 
                <router-link class="phone-nav-item align-self" to="/" exact >Home</router-link>
                <router-link  class="phone-nav-item" to="/email" exact >Email</router-link>
                <router-link  class="phone-nav-item" to="/notes" exact >Notes</router-link>
                <router-link  class="phone-nav-item" to="/about" exact >about</router-link>
            </nav>
</div>
    </section> 
    `,
    data() {
        return {
            showPhoneNav: false
        }
    }
}

