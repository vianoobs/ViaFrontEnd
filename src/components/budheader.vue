<template>
    <div id="budheader" class="box">Budget Stuff</div>
</template>



<script>
    export default {
        name: 'budheader',
    };

</script>



<style scoped>

    #budheader {
        grid-area: header;
        display: none;
        padding: 1em 0;
    }

    @media screen and (min-width: 1024px) {
        #budheader {
            display: block;
        }
    }

</style>