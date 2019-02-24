import { getStoreBuilder } from "vuex-typex";
var initialInventoryState = {
    productsById: {
        "fritos": { id: "fritos", name: "Fritos Corn Chips, Chili Cheese" },
        "doritos": { id: "doritos", name: "Doritos Nacho Cheese Flavored Tortilla Chips" },
        "cheetos": { id: "cheetos", name: "Cheetos Crunchy Cheese Flavored Snacks" },
        "tostitos": { id: "tostitos", name: "Tostitos Original Restaurant Style Tortilla Chips" }
    }
};
var p = getStoreBuilder().module("product", initialInventoryState);
var getProductByIdGetter = p.read(function (state) { return function (id) { return state.productsById[id]; }; }, "getProductById");
// state
var stateGetter = p.state();
// exported "inventory" module interface
var inventory = {
    // state
    get state() { return stateGetter(); },
    // getter as method
    getProductById: function (id) {
        return getProductByIdGetter()(id);
    }
};
export default inventory;
//# sourceMappingURL=inventory.js.map