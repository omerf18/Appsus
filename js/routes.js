import home from './pages/home.js';
// import email from './email/pages/email-app.cmp.js';
import note from './notes/pages/notes-app.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: home
    },
  //  {
        // path: '/email',
        // component: email,
            // children:[
            //     {
            //         path: 
            //         component:
            //     }
            // ]
<<<<<<< HEAD
    },
    // {
    //     path: '/notes',
    //     component: note
    // }
=======
    // },
    {
        path: '/notes',
        component: note
    }
>>>>>>> 785e0369a516746e141be545735f38bd8919c6c6
];

export const myRouter = new VueRouter({ routes: myRoutes });