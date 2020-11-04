import { myRouter } from './routes.js';
import susAppHeader from './cmps/sus-app-header.cmp.js';
// import susAppFooter from '../js/cmps/app-footer.js';

const options = {
    el: '#susApp',
    router: myRouter,
    template: `
    <section>
        <sus-app-header/>
        <!-- <main> -->
            <!-- <router-view></router-view> -->
        <!-- </main> -->
        <!-- <app-footer/> -->
    </section>
    `,
    components: {
        susAppHeader,
        // susAppFooter
    }
}


const app = new Vue(options);