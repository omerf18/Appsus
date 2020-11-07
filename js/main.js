import { myRouter } from './routes.js';
import susAppHeader from './cmps/sus-app-header.cmp.js';
import susAppFooter from './cmps/sus-app-footer.cmp.js';
import userMsg from './cmps/user-msg.cmp.js'
import {eventBus} from './services/event-bus.js'

const options = {
    el: '#susApp',
    router: myRouter,
    template: `
    <section class ="main-layout flex column">
     <sus-app-header class ="main-header flex"/>
         <main class ="main-container container flex-grow">
            <router-view></router-view>
         </main>
         <user-msg></user-msg>
     <sus-app-footer class = "main-footer flex"/> 
    </section>`,
    components: {
        susAppHeader,
        susAppFooter,
        userMsg,
        eventBus
    }
}


const app = new Vue(options);