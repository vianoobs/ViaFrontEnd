<template>
    <div>
        <div class="home-container">
            <div class="logo-container">
                <InitialsCanvasAnimation></InitialsCanvasAnimation>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import InitialsCanvasAnimation from "@/components/InitialsCanvasAnimation.vue"; // @ is an alias to /src

    @Component({
        components: {
            InitialsCanvasAnimation,
        },
    })
    export default class Home extends Vue {
    }
</script>

<style>
    .home-container {
        width: 100%;
        height: 100%;
    }
    .logo-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
