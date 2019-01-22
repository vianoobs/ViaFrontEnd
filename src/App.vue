<template>
    <v-app>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Vuetify</span>
                <span class="font-weight-light">MATERIAL DESIGN</span>
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

        <v-content>
            <router-view class="router-view"></router-view>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        components: {
                    },
        data() {
            return {
                //
            };
        },
    };
</script>
<style>
    v-app {
        height: 100%;
        width: 100%;
        display: table;
    }
    v-toolbar {
        display: table-row;
    }
    .router-view {
        width: 100%;
        height: 100%;
    }
</style>
