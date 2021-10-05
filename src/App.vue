<template>
  <TheHeader />
  <Wrapper></Wrapper>
  <TheFooter />
</template>

<script>
  import TheHeader from './components/header/TheHeader.vue';
  import Wrapper from './components/layout/Wrapper.vue';
  import TheFooter from './components/footer/TheFooter.vue';

  export default {
    components: {
      TheHeader,
      Wrapper,
      TheFooter
    }
  }
</script>

<style>
  /* cannot load local font from another scss file */

  @font-face {
    font-family: 'Ibarra-Real-Nova-Regular';
    src: url('./assets/fonts/ibarra-real-nova/regular/ibarra-real-nova-regular.eot');
    src: url('./assets/fonts/ibarra-real-nova/regular/ibarra-real-nova-regular.eot?#iefix') format('embedded-opentype'),
      url('./assets/fonts/ibarra-real-nova/regular/ibarra-real-nova-regular.woff') format('woff'),
      url('./assets/fonts/ibarra-real-nova/regular/ibarra-real-nova-regular.otf') format('opentype'),
      url('./assets/fonts/ibarra-real-nova/regular/ibarra-real-nova-regular.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ibarra-Real-Nova-Bold';
    src: url('./assets/fonts/ibarra-real-nova/bold/ibarra-real-nova-bold.eot');
    src: url('./assets/fonts/ibarra-real-nova/bold/ibarra-real-nova-bold.eot?#iefix') format('embedded-opentype'),
      url('./assets/fonts/ibarra-real-nova/bold/ibarra-real-nova-bold.woff') format('woff'),
      url('./assets/fonts/ibarra-real-nova/bold/ibarra-real-nova-bold.otf') format('opentype'),
      url('./assets/fonts/ibarra-real-nova/bold/ibarra-real-nova-bold.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Public-Sans-Regular';
    src: url('./assets/fonts/public-sans/regular/public-sans-regular.eot');
    src: url('./assets/fonts/public-sans/regular/public-sans-regular.eot?#iefix') format('embedded-opentype'),
      url('./assets/fonts/public-sans/regular/public-sans-regular.woff') format('woff'),
      url('./assets/fonts/public-sans/regular/public-sans-regular.otf') format('opentype'),
      url('./assets/fonts/public-sans/regular/public-sans-regular.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }
</style>