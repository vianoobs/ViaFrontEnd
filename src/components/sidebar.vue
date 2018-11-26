<template>
    <div id="sidebar" class="box">Sidebar</div>
</template>

<script>

    export default {
        name: 'sidebar',
    };

</script>



<style scoped>

    #sidebar {
        grid-area: sidebar;
    }

    @media screen and (min-width: 1024px) {
        #sidebar {
            display: none;
        }
    }


</style>