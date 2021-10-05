<template>
    <header class="header">
        <div class="container flex justify-content-between align-items-center">
            <TheLogo />
            <TheNavigation />
        </div>
    </header>
</template>

<script>
    import TheLogo from '../logo/TheLogo.vue';
    import TheNavigation from '../navigation/TheNavigation.vue'
export default {
    components: {
        TheLogo,
        TheNavigation
    }
}
</script>