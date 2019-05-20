<template lang="pug">
  .block
    el-pagination(background='',
    @size-change='handleSizeChange',
    @current-change='handleCurrentChange',
    :current-page='currentPage',
    :page-sizes='pageSizes',
    layout='total, sizes, prev,pager,next, jumper,slot',
    :total='total')
      .ensure-btn
        el-button(@click='clickEnter') 确定
</template>

<script>
  export default {
    name: "Pagination",
    data() {
      return {
        pageSizes:[100, 200, 300, 400],
        total: 1000,
        currentPage: 4
      }
    },
    computed: {},
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      clickEnter() {
        this.$emit('changeCurrentPage', this.currentPage);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .block{
    text-align: right;

  }

  .ensure-btn{
    float:right;
    margin-left: 1rem;
    .el-button{
      border: solid 1px #DCDFE6;
    }
  }
</style>
