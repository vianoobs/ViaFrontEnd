<template>
  <div class="homeView">
      <budheader/>
      <sidebar/>
      <purchase/>
      <budgetandFinancialsContainer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import budheader from '../components/budheader.vue';
import sidebar from '../components/sidebar.vue';
import purchase from '../components/purchase.vue';
import budgetandFinancialsContainer from '../components/budgetandFinancialsContainer.vue';

@Component({
  components: {
        budheader,
        sidebar,
        purchase,
        budgetandFinancialsContainer,
  },
})
export default class Home extends Vue {}
</script>
