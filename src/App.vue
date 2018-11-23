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

    #footer {
        grid-area: footer;
        display: none;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-size: .7em;
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
</template>
        <div id="header" class="box">Budget Stuff</div>
        <div id="sidebar" class="box">Sidebar</div>
        <div id="purchase" class="box">Purchase</div>
        <div id="budgetAndFinancialsContainer" class="box flex-container scrollSide"></div>
        <div id="footer" class="box">Footer</div>
-->