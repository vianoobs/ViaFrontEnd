<template>
    <div>
        <div class="home-container">
            This is the home page
            <basket-display></basket-display>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import BasketDisplay from "@/components/BasketDisplay.vue";
    @Component({
        components: {
            BasketDisplay
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
</style>
