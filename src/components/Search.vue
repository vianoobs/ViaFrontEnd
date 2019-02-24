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

</style>