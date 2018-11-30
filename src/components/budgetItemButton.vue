<template>
    <footer class="budgetGroupFooter">
        <div class="budgetGroupFooter-Content budgetGroupFooter-Content--Narrow">
            <button class="addBudgetItem" id="addBudgetItem">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                    <path fill="#FD0EBF" d="M3 0v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
                </svg>
                Add Item
            </button>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'budgetItemButton',
    };
</script>

<style scoped>

    .budgetGroupFooter {
        padding: 1.2em;
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
    }

    .budgetGroupFooter-Content.budgetGroupFooter-Content--Narrow {
        padding: 0;
        display: flex;
        flex: 0 1 33.33%;
    }

    .addBudgetItem {
        display: flex;
        align-items: center;
        text-align: center;
        margin: 0;
        border: 0;
        padding: 0;
        color: #FD0EBF;
        background-color: transparent;
        font-weight: 600;
        vertical-align: inherit;
    }

    .addBudgetItem svg {
        margin-right: .8em;
        overflow: hidden;
    }



</style>