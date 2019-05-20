<template lang="pug">
  .page
    Title
    Category
    .btn-div
      div
        el-button(icon="el-icon-plus" @click="add") 手动创建
        el-button(icon="el-icon-turn-off-microphone") 全局静音
        el-button(icon="el-icon-refresh") 刷新
      .select-div
        el-input(placeholder="搜索" )
          el-button(slot="append", icon="el-icon-search")
    .table-div
      el-table(ref='multipleTable',
      :data='tableData',
      style='width: 100%',
      @selection-change='handleSelectionChange'
      :header-cell-style="{'background-color': '#f8f8f8','color': '#999999'}")
        el-table-column(type='selection', width='55')
        el-table-column(prop='date', label='日期')
        el-table-column(prop='name', label='姓名')
        el-table-column(prop='address', label='地址',show-overflow-tooltip)
        el-table-column(prop='date', label='日期')
        el-table-column(prop='name', label='姓名')
        el-table-column(prop='address', label='地址')
        el-table-column(label='操作')
          template(slot-scope='scope')
            el-button(@click='handleClick(scope.row)', type='text', size='small') 编辑
            el-button(@click.native.prevent="deleteRow(scope.$index, tableData)", type='text', size='small') 删除
    Pagination
</template>

<script>
  import Title from '../components/page/Title';
  import Category from '../components/page/Category';
  import Pagination from '../components/page/Pagination';

  export default {
    name: "AlarmManagement",
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
    }
  }
</script>

<style scoped>

</style>
