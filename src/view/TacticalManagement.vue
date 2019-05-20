<template lang="pug">
  .page
    Title
    Category
    .tactical-tip
      span.span1 当前策略组&nbsp;:&nbsp;
      span.span2 系统默认&nbsp;
      span.span3 (&nbsp;编号: GP000&nbsp;)
      span.span4 切换
    .btn-div
      div
        el-button(icon="el-icon-plus" @click="add") 新增策略
        el-button(icon="el-icon-minus") 删除策略
        el-button(icon="el-icon-success") 策略生效
        el-button(icon="el-icon-error") 策略失效
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
    name: "TacticalManagement",
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

<style lang="scss" scoped>
  .tactical-tip{
    padding: 0.5rem;
    background-color: #fdf5de;
    border: solid 0.1rem #fada8f;
    .span2{
      font-size: 2rem;
      color: #f88d45;
    }
    .span3{
      font-size: 1.6rem;
      color: #f88d45;
    }
    .span4{
      color: #58bf78;
      border-bottom: solid 1px #58bf78;
      margin-left: 2rem;
      cursor: pointer;
      user-select: none;
    }
  }
</style>
