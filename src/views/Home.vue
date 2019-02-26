<template>
    <div class="home-container">
        <div class="title">VIA QUICK TRIPS</div>
        <v-container grid-list-xl fill-height>
            <v-layout column align-center justify-center>
                <v-btn color="red accent-4" class="home-button" large v-on:click="locate(food)">
                    <div class="button-text">Find Food</div>
                    <span class="icon-wrapper"><v-icon class="fa">fas fa-utensils</v-icon></span></v-btn>
                <v-btn color="red accent-4" class="home-button" large v-on:click="locate(drink)">
                    <div class="button-text">Find Drinks</div>
                    <span class="icon-wrapper"><v-icon class="fa">fas fa-coffee</v-icon></span></v-btn>
                <v-btn color="red accent-4" class="home-button" large v-on:click="locate(attraction)">
                    <div class="button-text">Find Attractions</div>
                    <span class="icon-wrapper"><v-icon class="fa">fas fa-map-marked-alt</v-icon></span></v-btn>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import router from "../router";
    import axios, {AxiosResponse} from "axios";
    import { store } from '../store/store';

    export default {

        name: 'budgetGroup',
        components: {
            store
        },

        //data
        data: () => {
            return {
                food: "Food",
                drink :"Drinks",
                attraction : "Attractions",
                lat : "",
                long : "",
                type : "type",
            }
        },

        //computed properties
        computed: {

            user: {
                get () {
                    return store.state.user
                },

                set (value) {
                    store.commit('changeUser', value)
                }
            }
        },

        //methods
        methods: {

            locate(type) {
                this.type = type;
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this.showPosition);
                }
            },

            showPosition(position) {
                this.lat = position.coords.latitude;
                this.long = position.coords.longitude;
                console.log(this.type)
                console.log(this.lat);
                console.log(this.long);
                router.push({path: 'selection', query: {type: this.type, lat: this.lat, long: this.long}})
            }
        },

        //mount
        mounted() {
            axios
                .get('/api/user', { withCredentials: true }).then(res => {
                store.commit('changeUser', res.data);
            });
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300');

    .v-btn {
        height: 20%;
    }

    .router-view {
        background-color: #343a40;
    }

    .home-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

    }

    .title {
        display: flex;
        align-items: flex-end;
        font-size: 4em !important;
        text-align: center;
        padding: 2em 0 0 0;
        color: white;
    }

    .home-button {
        color: white !important;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        justify-content: space-evenly !important;
    }

    .white-button {
        color: gray !important;
    }

    .button-text {
        width: 80%;
        font-size: 2em;
        font-weight: bold;
        transition: all 0.5s ease !important;
    }

    .icon-wrapper {
        width: 20%;
    }

    .fa {
        font-size: 5em;
        opacity: 0.5;
        transition: all 0.5s ease !important;
    }

    .home-button:hover .fa {
        opacity: 0.9
    }

    @media screen and (max-width: 800px) {
        .fa {
            font-size: 4em;
        }
    }

    @media screen and (max-width: 600px) {
        .fa {
            font-size: 3em;
        }
        .title {
            font-size: 3em !important;
        }
        .button-text {
            font-size: 1.5em;
        }
    }

    @media screen and (max-width: 400px) {
        .fa {
            font-size: 2em;
        }
    }
</style>

<style scoped>
    button {
        min-width: 100% !important;
    }
</style>
