<template>
    <!--v-flex xs12 sm12 md12-->
    <v-container>
        <v-layout>
            <v-flex xs12 sm10 offset-sm1>
                <v-title class="display-2 white--text">Results For {{type}} Closest To You</v-title>
                <v-layout row wrap>
                    <v-select v-on:change="hello" v-if="this.$route.query.type === 'Food'" :items="food" dark color="red accent-4" class="py-1 ml-3" label="Categories"></v-select>
                    <v-select v-if="this.$route.query.type === 'Drinks'" :items="drink" dark color="red accent-4" class="py-1 ml-3" label="Categories"></v-select>
                    <v-select v-if="this.$route.query.type === 'Attractions'" :items="attraction" dark color="red accent-4" class="py-1 ml-3" label="Categories"></v-select>
                    <v-flex xs12 sm6 class="py-2">
                        <v-btn-toggle exclusive class="m-0">
                            <v-btn v-on:click="sort(1)" flat class="py-1"><v-icon>$</v-icon></v-btn>
                            <v-btn v-on:click="sort(2)" flat class="py-1"><v-icon>$$</v-icon></v-btn>
                            <v-btn v-on:click="sort(3)" flat class="py-1"><v-icon>$$$</v-icon></v-btn>
                            <v-btn v-on:click="sort(4)" flat class="py-1"><v-icon>$$$$</v-icon></v-btn>
                        </v-btn-toggle>
                    </v-flex>
                </v-layout>
                <v-card v-for="(resultCard, key) in info.businesses">
                    <div>
                        <v-img :src="resultCard.image_url" aspect-ratio="5"></v-img>
                        <v-card-title>
                            <v-layout row justify-space-around><div>
                                <h4><a>{{resultCard.name}}</a></h4>
                                <hr>
                                <div>Estimated Time</div>
                                <div>{{Math.round(((resultCard.distance * 0.000621371) * 20))}} Min</div>
                            </div><div>
                                <v-rating small half-increments color="red accent-4" background-color="#42b883" v-model="resultCard.rating"></v-rating>
                                <div>Distance: {{(resultCard.distance * 0.000621371).toFixed(2)}} Miles</div>
                                <div>PRICE: {{resultCard.price}}</div>
                            </div>
                            </v-layout>
                        </v-card-title>
                        <v-container fill-height fluid class="red accent-4">
                            <v-layout align-center justify-center>
                                    <v-btn large color="white accent-2" v-on:click="result(resultCard)">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 504 360" style="enable-background:new 0 0 504 360;" xml:space="preserve">
                                            <g>
                    	                        <polygon class="st0" points="0,44.9 47.8,44.9 46.1,138.1 105.6,44.9 150.8,44.9 58.4,184.3 5.7,184.3  "/>
                    	                        <polygon class="st0" points="160.7,44.9 205.9,44.9 160.7,184.3 116.5,184.3  "/>
                    	                        <path class="st0" d="M328.3,184.3l-7.1-139.4h-52.7l-93.8,139.4h45.6l11.6-19.7h49.3l-0.3,19.7H328.3z M251.5,134l30.9-50.7V134   H251.5z"/>
                    	                        <polygon class="st0" points="181.1,325.1 405.9,122.1 354.2,34.9 504,121.8  "/>
                                            </g>
                                        </svg>
                                        <span id="text">Does it Faster</span>
                                    </v-btn>
                            </v-layout>
                        </v-container>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import axios, {AxiosResponse} from "axios";
    import router from "../router";

    @Component({})
    export default class Search extends Vue{
        //data
        food = ['Asian Fusion', 'Mexican', 'Pizza', 'Burgers', 'Italian', 'Restaurants', 'Fast Food', 'Vegetarian', 'Vegan'];
        drink = ['Juice Bars & Smoothies', 'Lounges', 'Dive Bars', 'Beer Bar', 'Cocktail Bars', 'Coffee', 'Wine Bar'];
        attraction = ['Art & Entertainment', 'Arcades', 'Tours', 'Music Venues', 'Parks', 'Amusement Parks', 'Landmarks & Historical Buildings', 'Performing Arts'];
        info = "";
        //computed
        get type() {
            return this.$route.query.type
        }
        get lat() {
            return this.$route.query.lat
        }

        get long() {
            return this.$route.query.long
        }

        // method
        sort(dollars) {
            axios
                .post<string>('http://localhost:8081/api/yelp', {
                    lat:this.$route.query.lat,
                    long:this.$route.query.long,
                    term: this.$route.query.type,
                    price:dollars
                })
                .then(response => {
                    this.info = response.data
                    console.log(response.data)
                })
        }

        hello(e){
            axios
                .post<string>('http://localhost:8081/api/yelp', {
                    lat:this.$route.query.lat,
                    long:this.$route.query.long,
                    term:e
                })
                .then(response => {
                    this.info = response.data
                    console.log(response.data)
                })
        }

        result(e){
            console.log(this.type);
            console.log(this.lat);
            console.log(this.long);
            router.push({path: 'routepreview', query:{type: this.type, lat: this.lat, long: this.long}, params:{e}})
        }

        mounted() {
            axios
                .post<string>('http://localhost:8081/api/yelp', {
                        lat:this.$route.query.lat,
                        long:this.$route.query.long,
                        term: this.$route.query.type
                })
                .then(response => {
                   this.info = response.data
                    console.log(response.data)
                })
        }
    }
</script>

<style scoped>
    .st0, #text{
        color:red;
        font-weight: bold;
        fill:red;
        padding-bottom: 2vh;
    }
    .v-btn__content > svg {
        height: 36px;
        width: 79px;
    }
</style>