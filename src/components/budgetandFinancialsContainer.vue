<template>
    <div id="budgetAndFinancialsContainer" class="box flex-container scrollSide"></div>
</template>

<script>
    export default {
        name: "budgetandFinancialsContainer"
    }
</script>

<style scoped>

    #budgetAndFinancialsContainer {
        grid-area: budgetAndFinancials;
    }

    .flex-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .box {
        background-color: orange;
    }

    .scrollSide {
        overflow-y: auto;
    }
</style>