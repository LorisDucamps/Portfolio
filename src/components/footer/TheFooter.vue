<template>
    <footer class="footer">
        <div class="container flex justify-content-between h-100">
            <div class="wrapper flex align-items-center">
                <TheLogo />
                <TheNavigation />
            </div>
            <BaseSocial />
        </div>
    </footer>
</template>

<script>
    import TheLogo from '../logo/TheLogo.vue';
    import TheNavigation from '../navigation/TheNavigation.vue';
    import BaseSocial from '../ui/BaseSocial.vue';

    export default {
        components: {
            TheLogo,
            TheNavigation,
            BaseSocial
        }
    }
</script>