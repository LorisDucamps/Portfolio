<template>
    <!-- CONDITIONNER UNE CLASSE EN FONCTION DE LA ROUTE -->
    <div class="layout">
        <router-view></router-view>
    </div>

</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-direction: column;
        gap: 15rem;
        margin-bottom: 15rem;
    }
</style>