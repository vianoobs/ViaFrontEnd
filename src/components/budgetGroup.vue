<template>
    <div class="budgetGroup">
        <header>{{budgetItemHeading}}</header>
        <div class="budgetItemContainer">
            <div class="budgetItemRow">
                <budgetItemRowContent></budgetItemRowContent>
            </div>
            <progress data-min="0" data-max="100" data-value="20"></progress>
        </div>
        <budget-item-button></budget-item-button>
    </div>
</template>

<script>
import BudgetItemRowContent from '../components/budgetItemRowContent.vue';
import BudgetItemButton from '../components/budgetItemButton.vue';

export default {
    name: 'budgetGroup',
    components: {
        BudgetItemRowContent,
        BudgetItemButton,
    },
    data: () => {
        return {
            budgetItemHeading: 'Housing',
        };
    },
};
</script>

<style scoped>

    header {
        color:black;
        font-size: 2em;
        padding: 1em 0;
    }

    .budgetGroup {
        margin: .5em 0;
        background: green;
    }

    .budgetItemRow {
        padding: .5em;
        position: relative;
    }

    progress {
        width: 100%;
        height: 1px;
        background-color: grey;
        z-index: 1;
        display: block;
        position: relative;
        border: 0;
        vertical-align: baseline;
    }



</style>