<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <CurvedButton
      text="Read More"
      color="rgb(170, 35, 35)"
      backgroundColor="white"
      border="1px solid black"
    />
  </div>
</template>


<script>
import CurvedButton from "../components/CurvedButton.vue";
export default {
  props: {
    title: { type: String },
    text: { type: String },
  },
  components: {
    CurvedButton,
  },
};
</script>


<style lang="scss" scoped>
.card {
  background-color: #fff;
  margin-right: 30px;
  padding: 35px 25px;
  width: 24%;

  p {
    color: #000;
    margin: 15px 0;
  }

  &:last-child {
    margin-right: 0px;
  }
}

@media (max-width: 1190px) {
  .card {
    width: 100%;
  }
}
</style>