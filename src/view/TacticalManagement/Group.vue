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
        el-button(icon="el-icon-plus" @click="newGroup") 新增策略组
        el-button(icon="el-icon-document-copy") 复制
        el-button(icon="el-icon-minus") 删除
        el-button(icon="el-icon-document-add") 备份/还原
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
    //新增策略组
    .popup
      el-dialog(title='新建策略组', :visible.sync='dialogVisible1')
        el-form.form1(:model='ruleForm', :rules='rules', label-position="left", ref='ruleForm', label-width='8rem')
          el-form-item(label='告警标题:', prop='name')
            el-input(v-model='ruleForm.name')
          el-form-item(label='告警内容:', prop='name',:inline="true")
            el-input(type="textarea", v-model='ruleForm.name')
          el-form-item(label='接收成员:', prop='name',:inline="true")
            el-input(v-model='ruleForm.name')
            .append-div
              el-popover(placement='left', width='400', trigger='click')
                el-table(:data='gridData')
                  el-table-column(width='150', property='date', label='日期')
                  el-table-column(width='100', property='name', label='姓名')
                  el-table-column(width='300', property='address', label='地址')
                el-button(slot='reference') 选择  ...
        .dialog-footer(slot='footer')
          el-button(@click="submitForm('ruleForm')") 确 定
          el-button(@click="resetForm('ruleForm')") 取 消


</template>

<script>
  import Title from '../../components/page/Title';
  import Category from '../../components/page/Category';
  import Pagination from '../../components/page/Pagination';

  export default {
    name: "Group",
    components: {Title, Category, Pagination},
    data() {
      return {
        dialogVisible1: false,
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
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      newGroup(){
        this.dialogVisible1 = true
      },
      handleSelectionChange() {
      },
      handleClick(data) {
      },
      deleteRow(data) {
      },
    }
  }
</script>

<style lang="scss" scoped>
  .tactical-tip {
    padding: 0.5rem;
    background-color: #fdf5de;
    border: solid 0.1rem #fada8f;
    .span2 {
      font-size: 2rem;
      color: #f88d45;
    }
    .span3 {
      font-size: 1.6rem;
      color: #f88d45;
    }
    .span4 {
      color: #58bf78;
      border-bottom: solid 1px #58bf78;
      margin-left: 2rem;
      cursor: pointer;
      user-select: none;
    }
  }
</style>
