import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/selection',
            name: 'selection',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: function () { return import(/* webpackChunkName: "about" */ './views/Selection.vue'); },
        },
        {
            path: '/routepreview/:card',
            name: 'routepreview',
            component: function () { return import('./views/RoutePreview.vue'); },
        },
    ],
});
//# sourceMappingURL=router.js.map