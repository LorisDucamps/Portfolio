<template>
    <Intro />
    <About />
    <CallToActionContact />
</template>

<script>
  import Intro from '../components/intro/Intro.vue';
  import About from '../components/about/About.vue';
  import CallToActionContact from '../components/cta/CallToActionContact.vue';

  export default {
    components: {
      Intro,
      About,
      CallToActionContact
    }
  }
</script>