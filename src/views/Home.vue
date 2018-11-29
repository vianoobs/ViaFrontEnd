<template>
  <div class="homeView">
      <budheader/>
      <sidebar/>
      <mobileSidebar/>
      <purchase></purchase>
      <budgetandFinancialsContainer/>
      <budfooter/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import budheader from '../components/budheader.vue';
import sidebar from '../components/sidebar.vue';
import mobileSidebar from '../components/mobileSidebar.vue';
import purchase from '../components/purchase.vue';
import budgetandFinancialsContainer from '../components/budgetandFinancialsContainer.vue';
import budfooter from '../components/budfooter.vue';

@Component({
  components: {
        budheader,
        sidebar,
        mobileSidebar,
        purchase,
        budgetandFinancialsContainer,
        budfooter,
  },
})

export default class Home extends Vue {}

</script>

