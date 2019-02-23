<template>
    <!--v-for="(item,key) in info" :key="key" id="ebaySearch"-->
    <!--<div>-->
        <!--<img class="ebayImg" :src="item.image.imageUrl" alt="NOPE">-->
        <!--<h4><a v-bind:href="item.itemWebUrl">{{item.title}}</a></h4>-->
        <!--<div id="ebayPrice">PRICE: {{item.price.value}}</div>-->
    <!--</div>-->
    <div>
        <v-list>
            <v-list-tile>
            <v-list-tile-title>51167 ABE LINCOLN & MARY TODD</v-list-tile-title>
                <v-btn small color="primary">604</v-btn>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile>
            <v-list-tile-title>51166 ABE LINCOLN OPPOSITE MARY TODD</v-list-tile-title>
                <v-btn small color="primary">604</v-btn>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile>
            <v-list-tile-title>71117 ACME OPPOSITE BUENA VISTA</v-list-tile-title>
                <v-list-action>
                    <v-btn small color="primary">75</v-btn>
                </v-list-action>

                    <v-btn small color="primary">275</v-btn>
            </v-list-tile>
            <v-divider></v-divider>
        </v-list>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({})
    export default class searchResults extends Vue{
    }
</script>

<style scoped>

</style>