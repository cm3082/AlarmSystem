<template lang="pug">
  .page
    Title
    Category
    .btn-div
      el-button 默认按钮
      el-button 默认按钮
    .el-table-div
      el-table(:data='tableData', border='', style='width: 100%' :header-cell-style="{'background-color': '#f8f8f8','color': '#999999'}")
        el-table-column(prop='date', label='日期', width='180')
        el-table-column(prop='name', label='姓名', width='180')
        el-table-column(prop='address', label='地址')
    Pagination

</template>

<script>
  import Title from '../components/page/Title';
  import Category from '../components/page/Category';
  import Pagination from '../components/page/Pagination';
  import {mapState, mapActions} from 'vuex';

  export default {
    name: 'DataVisualization',
    components: {Title, Category, Pagination},
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      }
    },
    computed: {
      ...mapState(["user", "report"]),
    },
    methods: {
      ...mapActions([
        'getChessData', 'setChessData'
      ]),
    }
  }
</script>

<style scoped lang="scss">
  .el-table-div {
    padding: 1rem 0;
  }
</style>
