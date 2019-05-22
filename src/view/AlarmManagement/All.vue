<template lang="pug">
  .page
    Title
    Category
    div all

</template>

<script>
  import Title from '../../components/page/Title';
  import Category from '../../components/page/Category';
  import Pagination from '../../components/page/Pagination';

  export default {
    name: "All",
    components: {Title, Category, Pagination},
  }
</script>

<style scoped>

</style>
