import home from './pages/home.js';
import email from './email/pages/email-app.cmp.js';
import note from './notes/pages/notes-app.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/email',
        component: email,
            // children:[
            //     {
            //         path: 
            //         component:
            //     }
            // ]
    },
    // {
    //     path: '/notes',
    //     component: note
    // }
];

export const myRouter = new VueRouter({ routes: myRoutes });