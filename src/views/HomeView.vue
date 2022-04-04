<template>
  <HeroSection />
  <HelpSection />
  <FooterSection />
</template>

<script>
// @ is an alias to /src
import HeroSection from "../layout/HomeView/HeroSection.vue";
import HelpSection from "../layout/HomeView/HelpSection.vue";
import FooterSection from "../layout/HomeView/FooterSection.vue";
export default {
  name: "HomeView",
  components: {
    HeroSection,
    HelpSection,
    FooterSection,
  },
};
</script>
