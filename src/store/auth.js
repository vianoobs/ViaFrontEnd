import * as tslib_1 from "tslib";
// path: store/auth.ts (module)
import { getStoreBuilder } from "vuex-typex";
var initialAuthState = { user: null, isLoading: false };
var b = getStoreBuilder().module("auth", initialAuthState);
// getters
var testGetter = b.read(function (state) { return state.user; }, "userTest");
// mutations
function setUser(state, payload) {
    state.user = payload.user;
}
function setIsLoading(state, payload) {
    state.isLoading = payload.isLoading;
}
// action
function login(context) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var userRes;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, , 2, 3]);
                    auth.commitSetIsLoading({ isLoading: true });
                    console.log('login');
                    return [4 /*yield*/, new Promise(function (resolve) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, setTimeout(function () { return resolve('NEW USER'); }, 2000)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    userRes = _a.sent();
                    auth.commitSetUser({ user: userRes });
                    return [3 /*break*/, 3];
                case 2:
                    auth.commitSetIsLoading({ isLoading: false });
                    return [7 /*endfinally*/];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function logout(context) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            console.log('logout');
            auth.commitSetUser({ user: null });
            return [2 /*return*/];
        });
    });
}
// state
var stateGetter = b.state();
// exported "auth" module interface
var auth = {
    // state
    get state() {
        return stateGetter();
    },
    // getters (wrapped as real getters)
    get items() {
        return testGetter();
    },
    // mutations
    commitSetUser: b.commit(setUser),
    commitSetIsLoading: b.commit(setIsLoading),
    // actions
    login: b.dispatch(login),
    logout: b.dispatch((logout))
};
export default auth;
//# sourceMappingURL=auth.js.map