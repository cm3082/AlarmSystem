<template lang="pug">
  .page
    Title
    Category
    div 个人统计
</template>

<script>
  import Title from '../../components/page/Title';
  import Category from '../../components/page/Category';
  export default {
    name: "Personal",
    components: {Title, Category},
  }
</script>

<style scoped>

</style>
