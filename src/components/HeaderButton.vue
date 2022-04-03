<template>
  <div class="top-header-btn">
    {{ children }}
  </div>
</template>

<script>
export default {
  props: ["children"],
};
</script>

<style lang="scss" scoped>
.top-header-btn {
  display: flex;
  align-items: center;

  .fa-magnifying-glass {
    margin-right: 5px;
  }
}
</style>