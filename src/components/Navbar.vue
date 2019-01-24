<template>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
            <span>Michael</span>
            <span class="font-weight-light">Nelms</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
                flat
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
        >
            <span class="mr-2">Latest Release</span>
            <v-icon>fas fa-external-link-alt</v-icon>
        </v-btn>
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

</style>
