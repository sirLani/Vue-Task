<template>
  <section id="page-section-3">
    <div class="container footer-section">
      <div class="inner-container">
        <div class="footer-content">
          <h1>What do we do?</h1>

          <p>
            You might not have heard of us, but we're the people behind the
            following impacted programmes.
          </p>
          <div class="programme-container">
            <ProgrammeCard
              title="Get online week"
              text="Lorem ipsum dolor amet"
            />
            <ProgrammeCard
              title="Get online week"
              text="Lorem ipsum dolor amet"
            />
            <ProgrammeCard
              title="Get online week"
              text="Lorem ipsum dolor amet"
            />
            <ProgrammeCard
              title="Get online week"
              text="Lorem ipsum dolor amet"
            />
          </div>
          <div class="button-container">
            <CurvedButton
              text="More about what we do"
              color="rgb(170, 35, 35)"
              backgroundColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CurvedButton from "../components/CurvedButton.vue";
import ProgrammeCard from "../components/ProgrammeCard";
export default {
  components: { CurvedButton, ProgrammeCard },
};
</script>

<style lang="scss">
.footer-section {
  background-color: #497c8f;
  padding: 2.5rem 0;
}

.footer-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1,
  p {
    color: #fff;
  }

  .button-container {
    margin-top: 3rem;
  }
  .programme-container,
  .button-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
  }

  @media (max-width: 1190px) {
    .programme-container {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-auto-rows: minmax(150px, auto);
      margin-right: 1rem;
      grid-row-gap: 20px;
      grid-column-gap: 20px;
    }
  }
  @media (max-width: 650px) {
    .programme-container {
      grid-template-columns: auto;
    }
  }
}
</style>