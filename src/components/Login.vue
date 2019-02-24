<template>
    <div class="text-xs-center">
        <v-dialog
                v-model="value"
                width="500"
                persistent="true"
                :dark="true"
        >
            <v-btn slot="activator" color="white" flat :disabled="value" class="login-button">
                <span v-if="user === null && value">...</span>
                <span v-if="user === null && !value">Login</span>
                <span v-if="user" v-on:click="logout()">Logout</span>
            </v-btn>

            <v-card>
                <v-card-title
                        class="headline grey darken-3 modal-title"
                        primary-title
                >
                    Login to Quick Trips
                </v-card-title>

                <v-card-text class="social-login-button-container">
                    <v-btn color="red" class="social-login-button google" v-on:click="login(SocialLogin.GOOGLE)"><span class="social-name">Google</span>
                        <v-icon class="social-icon">fab fa-google</v-icon>
                    </v-btn>
                    <v-btn color="blue" class="social-login-button facebook" v-on:click="login(SocialLogin.FACEBOOK)"><span class="social-name">Facebook</span>
                        <v-icon class="social-icon">fab fa-facebook</v-icon>
                    </v-btn>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="error"
                            flat
                            @click="value = false"
                    >
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import axios from "axios";
    import {weatherData} from "./weatherData";
    import auth, {SocialLogin} from "@/store/auth";

    @Component({})
    export default class Login extends Vue {
        value = false;

        get isLoading() {
            return auth.state.isLoading;
        }

        get user() {
            console.log(auth.state.user);
            return auth.state.user;
        }

        login(socialLogin: SocialLogin) {
            console.log('START LOGIN');
            console.log(auth.state.user);
            auth.login();
        }

        logout() {
            console.log('START LOGOUT');
            auth.logout();
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');

    .login-button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }

    .modal-title {
        display: flex;
        justify-content: center;
        color: white;
    }

    .social-login-button-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .social-login-button {
        height: 4em !important;
        width: 12em;
    }

    .social-login-button div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .social-name {
        font-size: 1.2em;
        flex-grow: 1;
        color: white;
    }

    .social-icon {
        width: 30%;
        font-size: 2.5em;
    }

    .google .social-icon {
        color: rgba(255, 255, 255, 0.6) !important;
    }

    .facebook .social-icon {
        color: rgba(255, 255, 255, 0.6) !important;
    }
</style>
