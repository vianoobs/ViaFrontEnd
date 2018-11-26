<template>
    <div id="app">
        <router-view class="homeView"></router-view>
    </div>
</template>


<script>
    export default {
        name: 'App',
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

    .homeView {
        height: 100vh;
        display: grid;
        grid-gap: .1em;
        grid-template-rows: 9.2fr .8fr;
        grid-template-areas:
                "budgetAndFinancials"
                "sidebar";
    }

    @media screen and (min-width: 768px) {

        .homeView {
            grid-template-columns: 6% 35% auto;
            grid-template-rows: 100%;
            grid-gap: .1em;
            grid-template-areas:
                    "sidebar budgetAndFinancials purchase";
        }

    }

    @media screen and (min-width: 1024px) {

        .homeView {
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