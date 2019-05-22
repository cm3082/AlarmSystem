<template lang="pug">
  .title
    .title-line |
    .title-text {{view.pages[view.navmemuIndex].zhName}}
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "Title",
    data() {
      return {}
    },
    created() {

    },
    computed: {
      ...mapState(["view"]),
    },
    watch: {
      '$route': function (to, from) {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    display: flex;
    padding: 1rem 0;
    border-bottom: solid 0.1rem var(--dark_grey);
    .title-line {
      color: var(--blue_green);
      font-weight: bolder;
      padding-right: 0.5rem;
    }
  }

</style>
