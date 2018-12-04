import Vue from 'vue';
import App from './App.vue';
import router from './router';
Vue.use({
    install: function(Vue, options) {
        Object.defineProperty(Vue.prototype, "uniqId", {
            get: function uniqId() {
                return this._uid;
            }
        });
    }
});

Vue.config.productionTip = false;


new Vue({
    router: router,
    mode: 'history'
    render: function (h) { return h(App); },
}).$mount('#app');
//# sourceMappingURL=main.js.map

