<template>
    <div id="mobileSidebar">
    <div id="mobileMenuSidebar" class="box"><button class="circle" v-bind:style="buttonCircle" v-on:click="miniOpen = !miniOpen">M</button></div>
        <div id="statsBubble" class="minicircle" v-if="miniOpen"><span>S</span></div>
        <div id="purchaseBubble" class="minicircle" v-if="miniOpen"><span>P</span></div>
        <div id="settingBubble" class="minicircle" v-if="miniOpen"><span>O</span></div>
    </div>
</template>

<script>
    export default {
        name: 'mobileSidebar',

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

</style>

<style scoped>

    span {
        text-align: center;
        line-height: 35px;
        position: absolute;
        right: 14px;
        font-weight: bold;
        color: white;
        font-size: 1em;
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
        #mobileSidebar {
            display: none;
        }
    }

</style>