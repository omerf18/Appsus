import home from './pages/home.cmp.js';
// import email from './pages/email.cmp.js';
import note from './pages/notes.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: home
    },
    // {
    //     path: '/email',
    //     component: email
    // },
    {
        path: '/notes',
        component: note
    }
];

export const myRouter = new VueRouter({ routes: myRoutes });