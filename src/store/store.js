import Vue from 'vue';
import Vuex from 'vuex';
import { getStoreBuilder } from "vuex-typex";
Vue.use(Vuex);
var store = getStoreBuilder().vuexStore();
export default store; // <-- "store" to provide to root Vue
//# sourceMappingURL=store.js.map