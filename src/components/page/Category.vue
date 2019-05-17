<template lang="pug">
  .category
    .category-item 全局统计
    .category-item 个人统计

</template>

<script>
  export default {
    name: "Category"
  }
</script>

<style lang="scss" scoped>
  .category {
    margin: 1rem 0;
    display: flex;
    background-color: var(--grey);
    .category-item{
      width: 10rem;
      background-color: var(--blue_green);
      color: var(--white);
      text-align: center;
      padding: 0.8rem;
    }
  }
</style>
