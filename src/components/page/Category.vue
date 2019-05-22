<template lang="pug">
  .category(v-if="show")
    .category-item(v-for="item,index in categories"
    @click="switchCategory(index)"
    :class="activeIndex==index?'active':'inactive'") {{item.zh}}

</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "Category",
    data() {
      return {
        show: true,
        activeIndex: 0,
        categories: [],
      }
    },
    created() {
      this.categories = this.view.pages[this.view.navmemuIndex].categories
      this.show = this.categories.length == 0 ? false : true
      this.activeIndex = this.view.categoryIndex
    },
    computed: {
      ...mapState(["view"]),
    },
    methods: {
      switchCategory(index) {
        if (this.activeIndex == index) {
          return
        }
        this.activeIndex = index
        this.$store.commit('categoryIndex', index)
        this.$router.push({name: this.view.pages[this.view.navmemuIndex].categories[index].en})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .category {
    margin: 1rem 0;
    display: flex;
    background-color: var(--grey);
    border: solid 0.1rem var(--dark_grey);
    .category-item {
      width: 10rem;
      color: var(--white);
      text-align: center;
      padding: 0.8rem;
      cursor: pointer;
      user-select: none;
    }
    .active {
      background-color: var(--blue_green);
    }
    .inactive {
      color: #2d374b;
      background-color: var(--grey);
    }
  }
</style>
