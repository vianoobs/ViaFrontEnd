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
        background: linear-gradient(
                rgba(0, 0, 0, 0.45),
                rgba(0, 0, 0, 0.9)
        ),
        url("../assets/prism.png") repeat;
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
