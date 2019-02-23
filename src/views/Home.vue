<template>
    <div>
        <v-container grid-list-xl>
            <v-layout column align-center fill-height>
                <v-btn color="error" large :to="{name: 'about'}">Find Food</v-btn>
                <v-btn color="error" large :to="{name: 'about'}" >Find Drinks</v-btn>
                <v-btn color="error" large :to="{name: 'about'}" >Find Attractions</v-btn>
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

    a {
        min-width: 100%!important;
    }

    .container {
        background-color:#343a40;
    }

</style>
