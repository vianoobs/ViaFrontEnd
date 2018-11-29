
<template>
    <div id="purchase" class="box">Purchase</div>
</template>


<script>

    export default {
        name: 'purchase',
    };
</script>

<style>

</style>

<style scoped>

    #purchase {
        grid-area: purchase;
        display: none;
    }

    @media screen and (min-width: 768px) {

        #purchase {
            display: block;
        }

    }

</style>