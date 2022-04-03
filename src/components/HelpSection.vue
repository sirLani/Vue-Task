<template>
  <section id="page-section-2">
    <div class="container help-section-bg">
      <div class="inner-container help-section-content">
        <h1>How can we help you?</h1>
        <h5>
          Let us know who you are and what you're looking for, and we'll help
          get you to the right place.
        </h5>
        <div class="form">
          <p>I am an individual and i want to learn</p>
          <CurvedButton
            text="Get involved now!"
            color="white"
            backgroundColor="rgb(170, 35, 35)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CurvedButton from "../components/CurvedButton.vue";
export default {
  components: {
    CurvedButton,
  },
};
</script>


<style lang="scss">
.help-section-bg {
  background: #ececec;
  padding-top: 2rem;

  .help-section-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h5 {
      margin-top: 0.8rem;
    }
  }

  .form {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    background: #fff;
    justify-content: center;
    margin: 2rem 0 3rem 0;
    padding: 1.5rem 0;
  }
}
</style>