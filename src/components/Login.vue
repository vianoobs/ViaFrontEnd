<template>
    <v-btn color="white" flat :disabled="isLoading" class="login-button">
        <span v-if="user === null && isLoading">...</span>
        <span v-if="user === null && !isLoading" v-on:click="login()">Login</span>
        <span v-if="user" v-on:click="logout()">Logout</span>
    </v-btn>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import axios from "axios";
    import {weatherData} from "./weatherData";
    import auth from "@/store/auth";

    @Component({})
    export default class Login extends Vue {
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
</style>
