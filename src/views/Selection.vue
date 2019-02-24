<template>
  <div>
    <v-container grid-list-xl>
      <Search></Search>
    </v-container>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Search from "@/components/Search.vue";

    @Component({
        components: {
            Search
        },
    })
    export default class Selection extends Vue {

    }
</script>

<style>

</style>
