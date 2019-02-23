<template>
    <!--v-flex xs12 sm12 md12-->
    <div id="dark">
        <h1>{Food, Drinks, Attractions} Near you: </h1>
        <ul id="row">
            <li>
                <div>
                    <label>
                        <input type="checkbox" value="priceRange1" name="price" class="price">
                        <span class="dollarSign">$</span>
                    </label>
                </div>
            </li>
            <li>
                <div>
                    <label>
                        <input type="checkbox" value="priceRange2" name="price" class="price">
                        <span class="dollarSign">$$</span>
                    </label>
                </div>
            </li>
            <li>
                <div>
                    <label>
                        <input type="checkbox" value="priceRange3" name="price" class="price">
                        <span class="dollarSign">$$$</span>
                    </label>
                </div>
            </li>
            <li>
                <div>
                    <label>
                        <input type="checkbox" value="priceRange4" name="price" class="price">
                        <span class="dollarSign">$$$$</span>
                    </label>
                </div>
            </li>
        </ul>
        <div>
            <!-- v-for="(resultCard, key) in resultSet :key="key"" -->
            <div class="flexBox">
                <!-- takes image url -->
                <img class="resultImg" src="../assets/logo.png" alt="No Img">
                <!-- takes resultCard url adds to anchor -->
                <ul>
                    <h4><a>Petes Awesome Restuarant</a></h4>
                    <div>Address: 2019 Land St</div>
                </ul>
                <!-- takes image url -->
                <ul>
                    <div id="ebayPrice">Rating: ***** </div>
                    <div id="ebayPrice">Distance: 12.2miles </div>
                    <div id="ebayPrice">PRICE: {$, $$, $$$, $$$$} </div>
                </ul>
            </div>
            <br>
            <div class="flexBox">
                <!-- takes image url -->
                <img class="resultImg" alt="No Img">
                <!-- takes resultCard url adds to anchor -->
                <ul>
                    <h4><a>Steel Food Stuff Restuarant</a></h4>
                    <div>Address: 2019 Land St</div>
                </ul>
                <!-- takes image url -->
                <ul>
                    <div id="ebayPrice">Rating: ***** </div>
                    <div id="ebayPrice">Distance: 12.2miles </div>
                    <div id="ebayPrice">PRICE: {$, $$, $$$, $$$$} </div>
                </ul>
            </div>
            <br>
            <div class="flexBox">
                <!-- takes image url -->
                <img class="resultImg" alt="No Img">
                <!-- takes resultCard url adds to anchor -->
                <ul>
                    <h4><a>Dog Man Restuarant</a></h4>
                    <div>Address: 2019 Land St</div>
                </ul>
                <!-- takes image url -->
                <ul>
                    <div id="ebayPrice">Rating: ***** </div>
                    <div id="ebayPrice">Distance: 12.2miles </div>
                    <div id="ebayPrice">PRICE: {$, $$, $$$, $$$$} </div>
                </ul>
            </div>
        </div>
    </div>
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