import home from './pages/home.js';
import email from './email/pages/email-app.cmp.js';
import note from './notes/pages/notes-app.cmp.js';
import emailCompose from './email/pages/email-compose.cmp.js'
import emailDetails from './email/pages/email-details.cmp.js'

const myRoutes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/email',
        component: email,
        children: [
            {
                path: '/compose',
                component:emailCompose
            }
        ]

    },
    {
            path: '/email/:emailId',
            component: emailDetails
    },
    {
        path: '/notes',
        component: note
    }
];

export const myRouter = new VueRouter({ routes: myRoutes });