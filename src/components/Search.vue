<template>
    <!--v-flex xs12 sm12 md12-->
    <v-container>
        <v-container fluid class="pa-0">
            <v-layout row wrap>
                <v-flex xs12 sm6 class="py-2">
                    <v-btn-toggle v-model="toggle_multiple" multiple>
                        <v-btn flat><v-icon>$</v-icon></v-btn>
                        <v-btn flat><v-icon>$$</v-icon></v-btn>
                        <v-btn flat><v-icon>$$$</v-icon></v-btn>
                        <v-btn flat><v-icon>$$$$</v-icon></v-btn>
                    </v-btn-toggle>
                </v-flex>
            </v-layout>
        </v-container>
        <v-layout>
            <v-flex xs12 sm10 offset-sm1>
                <!--v-for="(resultCard, key) in resultSet :key="key"" -->
                <v-card>
                    <v-img :src="require('../assets/logo.png')" aspect-ratio="4"></v-img>
                    <v-card-title>
                        <v-layout row justify-space-around><div>
                            <h4><a>Petes Awesome Restuarant</a></h4>
                            <div>Address: 2019 Land St</div>
                        </div><div>
                            <div>Rating: ***** </div>
                            <div>Distance: 12.2miles </div>
                            <div>PRICE: {$, $$, $$$, $$$$} </div>
                        </div>
                        </v-layout>
                    </v-card-title>
                </v-card>
                <v-card>
                    <v-img :src="require('../assets/logo.png')" aspect-ratio="4"></v-img>
                    <v-card-title>
                        <v-layout row justify-space-around><div>
                            <h4><a>Petes Awesome Restuarant</a></h4>
                            <div>Address: 2019 Land St</div>
                        </div><div>
                            <div>Rating: ***** </div>
                            <div>Distance: 12.2miles </div>
                            <div>PRICE: {$, $$, $$$, $$$$} </div>
                        </div>
                        </v-layout>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    <!--<div id="dark">-->
        <!--<h1>{Food, Drinks, Attractions} Near you: </h1>-->
        <!--<ul id="row">-->
            <!--<li>-->
                <!--<div>-->
                    <!--<label>-->
                        <!--<input type="checkbox" value="priceRange1" name="price" class="price">-->
                        <!--<span class="dollarSign">$</span>-->
                    <!--</label>-->
                <!--</div>-->
            <!--</li>-->
            <!--<li>-->
                <!--<div>-->
                    <!--<label>-->
                        <!--<input type="checkbox" value="priceRange2" name="price" class="price">-->
                        <!--<span class="dollarSign">$$</span>-->
                    <!--</label>-->
                <!--</div>-->
            <!--</li>-->
            <!--<li>-->
                <!--<div>-->
                    <!--<label>-->
                        <!--<input type="checkbox" value="priceRange3" name="price" class="price">-->
                        <!--<span class="dollarSign">$$$</span>-->
                    <!--</label>-->
                <!--</div>-->
            <!--</li>-->
            <!--<li>-->
                <!--<div>-->
                    <!--<label>-->
                        <!--<input type="checkbox" value="priceRange4" name="price" class="price">-->
                        <!--<span class="dollarSign">$$$$</span>-->
                    <!--</label>-->
                <!--</div>-->
            <!--</li>-->
        <!--</ul>-->
        <!--<div>-->
    <!--/v-flex-->
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({})
    export default class Search extends Vue{

    }
</script>

<style scoped>
    #dark {
        background-color: orange;
    }

    .resultImg {
        width: 20vh;
        height: 20vh;
    }

    .price {
        cursor: pointer;
        display: none;
    }

    #row {
        display: flex;
    }

    #row > li {
        list-style: none;
    }

    .dollarSign{
        padding: .3em;
    }

    .flexBox {
        display: flex;
    }
</style>