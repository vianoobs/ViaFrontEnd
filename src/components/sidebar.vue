<template>
    <div id="sidebar" class="box">Sidebar</div>
</template>

<script>

    export default {
        name: 'sidebar',
    };

</script>

<style>

</style>


<style scoped>

    #sidebar {
        grid-area: sidebar;
        display: none;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        #sidebar {
            display: block;
        }
    }


</style>