<template>
    <div id="app">
        <budheader/>
        <sidebar/>
        <div id="mobileSidebar">
            <div id="mobileMenuSidebar" class="box"><button class="circle" v-bind:style="buttonCircle" v-on:click="miniOpen = !miniOpen">M</button></div>
            <div v-if="miniOpen"><button id="statsBubble" class="minicircle">S</button></div>
            <div v-if="miniOpen"><button id="purchaseBubble" class="minicircle">P</button></div>
            <div v-if="miniOpen"><button id="settingBubble" class="minicircle">O</button></div>
        </div>
        <purchase/>
        <budgetandFinancialsContainer/>
        <budfooter/>
    </div>
</template>

<script>
import budheader from './components/budheader.vue';
import sidebar from './components/sidebar.vue';
import purchase from './components/purchase.vue';
import budgetandFinancialsContainer from './components/budgetandFinancialsContainer.vue';
import budfooter from './components/budfooter.vue';

export default {
        name: 'App',
        components: {
        budheader,
        sidebar,
        purchase,
        budgetandFinancialsContainer,
        budfooter,
        },
        data: () => {
            return {
                buttonCircle: {
                    background: 'blue',
                },
                miniOpen: false,
            };
        },
    };
</script>

<style>

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-size: .7em;
    }

    .box {
        background-color: orange;
    }

</style>

<style scoped>

    #app {
        height: 100vh;
        display: grid;
        grid-gap: .1em;
        grid-template-rows: 100%;
        grid-template-areas:
                "budgetAndFinancials";
    }

    #statsBubble {
        position: fixed;
        bottom: 66px;
        left: 13px;
        background-color: green;
    }

    #settingBubble{
        position: fixed;
        bottom: 5px;
        left: 76px;
        background-color: red;
    }

    #purchaseBubble {
        position: fixed;
        bottom: 42px;
        left: 53px;
        background-color: purple;
    }

    #mobileMenuSidebar {
        position: fixed;
        bottom: -34px;
        left: -33px;
    }

    .minicircle {
        height: 35px;
        width: 35px;
        border-radius: 50%;
    }

    .circle {
        height: 89px;
        width: 89px;
        border-radius: 50%;
    }


    @media screen and (min-width: 768px) {

        #app {
            grid-template-columns: 6% 35% auto;
            grid-template-rows: 100%;
            grid-gap: .1em;
            grid-template-areas:
                    "sidebar budgetAndFinancials purchase";
        }

        #mobileSidebar {
            display: none;
        }

    }

    @media screen and (min-width: 1024px) {

        #app {
            grid-template-columns: 45% 55%;
            grid-template-rows: .8fr 8.7fr .5fr;
            grid-gap: .1em;
            grid-template-areas:
                    "header header"
                    "budgetAndFinancials purchase"
                    "footer footer";
        }
    }

</style>
<!--
<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
-->