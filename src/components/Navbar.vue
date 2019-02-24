<template>
    <v-toolbar app class="red accent-4">
        <v-toolbar-title class="headline text-uppercase">
            <v-btn flat :to="{name: 'home'}">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 504 360" style="enable-background:new 0 0 504 360;" xml:space="preserve">
                    <g>
                    	<polygon class="st0" points="0,44.9 47.8,44.9 46.1,138.1 105.6,44.9 150.8,44.9 58.4,184.3 5.7,184.3  "/>
                    	<polygon class="st0" points="160.7,44.9 205.9,44.9 160.7,184.3 116.5,184.3  "/>
                    	<path class="st0" d="M328.3,184.3l-7.1-139.4h-52.7l-93.8,139.4h45.6l11.6-19.7h49.3l-0.3,19.7H328.3z M251.5,134l30.9-50.7V134   H251.5z"/>
                    	<polygon class="st0" points="181.1,325.1 405.9,122.1 354.2,34.9 504,121.8  "/>
                    </g>
                </svg>
            </v-btn>
            <!--<v-img :src="require('../assets/Main-Logo.png')">-->
            <!--</v-img>-->
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title>
            <span><Weather></Weather></span>
        </v-toolbar-title>
    </v-toolbar>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import Weather from "@/components/Weather.vue";

    @Component({
        components: {Weather}
    })
    export default class Navbar extends Vue {

    }
</script>

<style>
    .st0{
        fill:#FFFFFF;
    }

    svg {
        height: 42px;
        width: 100px;
    }
</style>
