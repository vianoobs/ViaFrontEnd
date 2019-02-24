import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import {getStoreBuilder} from "vuex-typex";
import {InventoryState} from "@/store/inventory";

export interface RootState
{
  inventory: InventoryState
}

Vue.use(Vuex);
const store: Store<RootState> = getStoreBuilder<RootState>().vuexStore();
export default store; // <-- "store" to provide to root Vue
