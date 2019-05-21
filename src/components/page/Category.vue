<template lang="pug">
  .category(v-if="show")
    .category-item(v-for="item,index in categories"
    @click="switchCategory(index)"
    :class="activeIndex==index?'active':'inactive'") {{item}}

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
        categoriesList: [
          {title: 'DataVisualization', categories: ['全局统计', '个人统计']},
          {title: 'SystemAccess', categories: []},
          {title: 'TacticalManagement', categories: ['策略管理', '成员管理', '策略配置', '排班管理']},
          {title: 'AlarmManagement', categories: ['我的告警', '所有告警',]},
          {title: 'OperationLog', categories: []},
          {title: 'PlatformManagement', categories: ['用户权限管理']},
        ]
      }
    },
    created() {
      const self = this
      this.categoriesList.map(item => {
        if (item.title == this.view.title.enName) {
          self.categories = item.categories
          if (self.categories.length == 0) {
            self.show = false
          }
        }
      })
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
