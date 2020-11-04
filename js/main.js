import { myRouter } from './routes.js';
import susAppHeader from './cmps/sus-app-header.cmp.js';
import susAppFooter from './cmps/sus-app-footer.cmp.js';

const options = {
    el: '#susApp',
    router: myRouter,
    template: `
    <section>
     <sus-app-header class ="main-header flex"/>
         <main class ="main-container">
            <router-view></router-view>
         </main>
     <sus-app-footer class = "main-footer flex"/> -->
    </section>
    `,
    components: {
        susAppHeader,
        susAppFooter
    }
}


const app = new Vue(options);