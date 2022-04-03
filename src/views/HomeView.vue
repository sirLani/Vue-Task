<template>
  <HeroSection />
  <HelpSection />
</template>

<script>
// @ is an alias to /src
import HeroSection from "../components/HeroSection.vue";
import HelpSection from "../components/HelpSection.vue";
export default {
  name: "HomeView",
  components: {
    HeroSection,
    HelpSection,
  },
};
</script>
