<template>
    <v-toolbar dark app>
        <v-toolbar-title class="headline text-uppercase">
            <span>VIA</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title>
            <span>Weather</span>
        </v-toolbar-title>
    </v-toolbar>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({})
    export default class Navbar extends Vue {

    }
</script>

<style>
    .navbar {
        background-color: darkred;
    }
</style>
