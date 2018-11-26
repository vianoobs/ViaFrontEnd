<template>
    <div id="budfooter" class="box">Footer</div>
</template>

<script>
    export default {
        name: 'budfooter',
    };
</script>

<style scoped>

    #budfooter {
    grid-area: footer;
    display: none;
    }

    @media screen and (min-width: 1024px) {
        #budfooter {
            display: block;
        }
    }

</style>