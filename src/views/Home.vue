<template>
    <div>
        <v-container grid-list-xl fill-height>
            <v-layout column child-flex>
                <router-link :to="{name: 'about'}">
                    <v-btn color="error" fill-height>Find Food</v-btn>
                </router-link>
                <router-link :to="{name: 'about'}">
                    <v-btn color="error">Find Drink</v-btn>
                </router-link>
                <router-link :to="{name: 'about'}">
                    <v-btn color="error">Find Attraction</v-btn>
                </router-link>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import BasketDisplay from "@/components/BasketDisplay.vue";

    @Component({
        components: {
            BasketDisplay
        },
    })
    export default class Home extends Vue {
    }
</script>

<style>

</style>
