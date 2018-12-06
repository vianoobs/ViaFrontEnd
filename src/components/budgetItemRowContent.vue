<template>
    <div class="budgetItemRowContent">

        <div class="budgetItemRow-Column">
            <div class="budgetItemLabel">
                <input type="text" maxlength="32" placeholder="Label" class="input-Budget-Inline-Small budgetItemRow-Input">
            </div>
        </div>

        <!--input that will hopefully update amoundbudgeted in parent object-->
        <div class="budgetItemRow-Column">
            <div class="amountBudgetedInputContainer">
                <input v-model.number="amount" class="amountBudgetedNumber budgetItemRow-Input input-Budget-Inline-Small" type="text" placeholder="$">
            </div>
        </div>
        <div class="budgetItemRow-Column">
            <span class="budgetItemSecondColumnMoney-Spent">
                <span class="money-symbol">$</span>
                <span class="money-integer"></span>
                <!--<span class="money-decimal">.</span>-->
                <!--<span class="money-fractional">04</span>-->
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data(){
            return {
                amount: null,
            }
        },
        created() {
            this.amount = this.value;
        },
        watch:{
            amount(newVal) {
                this.$emit('value', newVal);
            }
        },
        methods: {
            // budgetUpdating: () => {
            //     this.$emit ();
            //     console.log("Hi");
            // },
        },
    };

</script>

<style scoped>

    .budgetItemRowContent {
        display: flex;
        align-items: center;
        flex-direction: row;
        align-content: center;
        flex-wrap: nowrap;
        padding: .3em 1em;
        background-color: orangered;
        position: relative;
    }

    .budgetItemRow-Column:first-of-type {
        align-items: center;
        flex-wrap: wrap;
        display: flex;
        flex: 0 1 50%;
    }

    .budgetItemRow-Column:nth-child(2), .budgetItemRow-Column:nth-child(3) {
        text-align: right;
        justify-content: flex-end;
        align-items: flex-end;
        display: flex;
        flex: 0 1 25%;
    }

    .budgetItemLabel {
        width: 100%;
        max-width: calc(100% - 30px);
        display: block;
    }

    .input-Budget-Inline-Small {
        display: inline-block;
        margin: 0;
        width: 100%;
        background: deepskyblue;
    }

    .budgetItemRow-Input {
        margin-right: -.5em;
        margin-left: -.5em;
        margin-bottom: .2em;
        border: 1px solid transparent;
        border-radius: .4em;
        padding: .4em;
        line-height: .1em;
    }

    .amountBudgetedInputContainer {
        flex-basis: 50%;
    }

    .amountBudgetedNumber {
        border: none;
    }


</style>