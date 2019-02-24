// path: store/auth.ts (module)
import {BareActionContext, getStoreBuilder} from "vuex-typex";
import inventory, {Product} from "@/store/inventory";
import {RootState} from "@/store/store";
import axios from "axios"

export enum SocialLogin {
    FACEBOOK, GOOGLE
}

export interface AuthState {
    user: any,
    isLoading: boolean
}

const initialAuthState: AuthState = {user: null, isLoading: false};
const b = getStoreBuilder<RootState>().module("auth", initialAuthState);

// getters
const testGetter = b.read(state => state.user, "userTest");

// mutations
function setUser(state: AuthState, payload: { user: any }) {
    state.user = payload.user;
}

function setIsLoading(state: AuthState, payload: { isLoading: boolean }) {
    state.isLoading = payload.isLoading
}

// action
async function login(context: BareActionContext<AuthState, RootState>) {
    try {
        auth.commitSetIsLoading({isLoading: true});

        console.log('login');
        // const userRes = await axios.get(`http://localhost:8081/api/auth`, { responseType: "json" });
        const userRes = await new Promise(async (resolve) => {
            await setTimeout(() => resolve('NEW USER'), 2000);
        });

        auth.commitSetUser({user: userRes})
    } finally {
        auth.commitSetIsLoading({isLoading: false})
    }
}

async function logout(context: BareActionContext<AuthState, RootState>) {
    console.log('logout');
    auth.commitSetUser({user: null});
}

// state
const stateGetter = b.state();

// exported "auth" module interface
const auth = {
    // state
    get state() {
        return stateGetter()
    },

    // getters (wrapped as real getters)
    get items() {
        return testGetter()
    },

    // mutations
    commitSetUser: b.commit(setUser),
    commitSetIsLoading: b.commit(setIsLoading),

    // actions
    login: b.dispatch(login),
    logout: b.dispatch((logout))
};

export default auth;
