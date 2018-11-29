import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import purchase from './components/purchase';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path:'/purchase',
            name:'purchase',
            component: purchase,
        }
    ],
});
//# sourceMappingURL=router.js.map