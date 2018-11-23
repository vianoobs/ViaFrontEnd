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
    }

    .box {
        background-color: orange;
    }

</style>