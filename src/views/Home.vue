<template>
    <div>
        <v-container grid-list-xl fill-height>
            <v-layout column align-center justify-center>
                <v-btn color="error" large v-on:click="locate(food)">Find Food</v-btn>
                <v-btn color="error" large v-on:click="locate(drink)">Find Drinks</v-btn>
                <v-btn color="error" large v-on:click="locate(attraction)">Find Attractions</v-btn>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import BasketDisplay from "@/components/BasketDisplay.vue";
    import router from "../router";

    @Component({
        components: {
            BasketDisplay
        },
    })
    export default class Home extends Vue {
        food = "Food";
        drink = "Drinks";
        attraction = "Attractions";
        lat = "";
        long = "";
        type = "type";
        //methods
        locate (type) {
            this.type = type;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            }
        }

        showPosition(position) {
            this.lat = position.coords.latitude;
            this.long = position.coords.longitude;
            console.log(this.type)
            console.log(this.lat);
            console.log(this.long);
            router.push({path: 'about', query:{type: this.type, lat: this.lat, long: this.long}})
        }

        //mount
        mounted(){
        }
    }
</script>

<style>


    .v-btn {
        height: 25%;
    }

    .router-view {
        background-color:#343a40;
    }

</style>

<style scoped>
    button {
        min-width: 100%!important;
    }
</style>
