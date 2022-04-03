<template>
  <div class="logo-container">
    <img alt="logo" src="../assets/logo.png" />
    <div class="logo-text">
      <h1>GoodThings</h1>
      <h4>Foundation</h4>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Logo",
};
</script>

<style lang="scss">
.logo-container {
  display: flex;
  img {
    margin-right: 3px;
  }
  h1 {
    font-weight: 400;
  }

  h4 {
    margin-top: -15px;
  }
  .logo-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>