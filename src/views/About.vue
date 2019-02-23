<template>
  <div>
    <v-container grid-list-xl>
      <Search></Search>
    </v-container>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import BasketDisplay from "@/components/BasketDisplay.vue";
    import Search from "@/components/Search.vue";

    @Component({
        components: {
            BasketDisplay,
            Search
        },
    })
    export default class About extends Vue {
    }
</script>

<style>

</style>
