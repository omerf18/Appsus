import bookApp from '../js/pages/book-app.js';
import home from '../js/pages/home.js'
import about from '../js/pages/about.js';
import bookDetails from '../js/pages/book-details.js';

const myRoutes = [
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/',
        component: home
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
]

export const myRouter = new VueRouter({ routes: myRoutes })

