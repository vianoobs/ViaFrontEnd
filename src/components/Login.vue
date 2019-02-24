<template>
    <div class="text-xs-center">
        <v-dialog
                v-model="value"
                width="500"
                persistent="true"
        >
            <v-btn slot="activator" color="white" flat :disabled="value" class="login-button">
                <span v-if="user === null && value">...</span>
                <span v-if="user === null && !value" v-on:click="startLogin()">Login</span>
                <span v-if="user" v-on:click="logout()">Logout</span>
            </v-btn>

            <v-card>
                <v-card-title
                        class="headline red darken-3 modal-title"
                        primary-title
                >
                    Login to Quick Trips
                </v-card-title>

                <v-card-text class="social-login-button-container">
                    FB G
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
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
    import auth from "@/store/auth";

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

        login() {
            console.log('START LOGIN');
            console.log(auth.state.user);
            auth.login();
        }

        startLogin() {
            console.log('START LOGIN');
            console.log(auth.state.user);
            auth.startLogin();
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
</style>
