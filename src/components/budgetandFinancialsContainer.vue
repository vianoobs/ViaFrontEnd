<template>
    <div id="budgetAndFinancialsContainer" class="box flex-container scrollSide"></div>
</template>

<script>
    export default {
        name: 'budgetandFinancialsContainer',
    };

</script>

<style>

</style>

<style scoped>

    #budgetAndFinancialsContainer {
        grid-area: budgetAndFinancials;
    }

    .flex-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .scrollSide {
        overflow-y: auto;
    }

    @media screen and (min-width: 1024px) {

        .flex-container {
            flex-direction: row;
        }
    }

</style>