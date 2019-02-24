<template>
    <div>
        <v-container grid-list-xl>
            <Result></Result>
        </v-container>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Result from "@/components/Result.vue";

    @Component({
        components: {
            Result
        },
    })
    export default class RoutePreview extends Vue {

    }
</script>

<style>

</style>