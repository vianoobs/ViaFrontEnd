import * as tslib_1 from "tslib";
// path: store/basket/basket.ts (module)
import { getStoreBuilder } from "vuex-typex";
import inventory from "@/store/inventory";
import axios from "axios";
var initialBasketState = { items: [], isLoading: false };
var b = getStoreBuilder().module("basket", initialBasketState);
// getters
var numberOfItemsGetter = b.read(function (state) { return state.items.length; }, "numberOfItems");
var itemsGetter = b.read(function (state) {
    var displayItems = state.items.map(function (item) {
        return {
            product: inventory.getProductById(item.productId),
            quantity: item.quantity
        };
    });
    return displayItems;
}, "items");
// mutations
function appendItem(state, payload) {
    state.items.push({
        productId: payload.productId,
        quantity: payload.quantity
    });
}
function setIsLoading(state, payload) {
    state.isLoading = payload.isLoading;
}
// action
function restoreSavedBasket(context) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var savedBasketId, savedBasket, items;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    savedBasketId = localStorage["basketId"];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    basket.commitSetIsLoading({ isLoading: true });
                    return [4 /*yield*/, axios.get("//chips-store.com/get-saved-basket/" + savedBasketId, { responseType: "json" })];
                case 2:
                    savedBasket = (_a.sent()).data;
                    items = savedBasket.items;
                    items.forEach(function (item) { return basket.commitAppendItem(item); });
                    return [3 /*break*/, 4];
                case 3:
                    basket.commitSetIsLoading({ isLoading: false });
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// state
var stateGetter = b.state();
// exported "basket" module interface
var basket = {
    // state
    get state() { return stateGetter(); },
    // getters (wrapped as real getters)
    get items() { return itemsGetter(); },
    get numberOfItems() { return numberOfItemsGetter(); },
    // mutations
    commitAppendItem: b.commit(appendItem),
    commitSetIsLoading: b.commit(setIsLoading),
    // actions
    dispatchRestoreSavedBasket: b.dispatch(restoreSavedBasket)
};
export default basket;
//# sourceMappingURL=basket.js.map