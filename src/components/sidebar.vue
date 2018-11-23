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

    .box {
        background-color: orange;
    }

</style>