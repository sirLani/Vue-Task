<template>
  <HeroSection />
  <HelpSection />
  <FooterSection />
</template>

<script>
// @ is an alias to /src
import HeroSection from "../components/HeroSection.vue";
import HelpSection from "../components/HelpSection.vue";
import FooterSection from "../components/FooterSection.vue";
export default {
  name: "HomeView",
  components: {
    HeroSection,
    HelpSection,
    FooterSection,
  },
};
</script>
