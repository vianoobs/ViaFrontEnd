import Vue from 'vue';
import Router from 'vue-router';
import purchase from './components/purchase';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/purchase',
            name:'purchase',
            component: purchase,
        }
    ],
});
//# sourceMappingURL=router.js.map