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
        el-button(icon="el-icon-plus" @click="add") 新增排班
        el-button(icon="el-icon-minus") 删除排班
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
    //新增排班
    .popup
      el-dialog(title='新增排班', :visible.sync='dialogVisible1')
        el-form.form1(:model='ruleForm', :rules='rules', label-position="left", ref='ruleForm', label-width='8rem')
          el-row(:gutter="20")
            el-col(:span="12")
              el-form-item(label='名称:', prop='name')
                el-input(v-model='ruleForm.name')
            el-col(:span="12")
              el-form-item(label='失效时间:', prop='name')
                el-date-picker(v-model='value1', type='date', placeholder='选择日期')
          el-row(:gutter="20")
            el-col(:span="12")
              el-form-item(label='轮班周期:', prop='name')
                el-row
                  el-col(:span="11")
                    el-input
                  el-col(:span="11" :offset="2")
                    el-select
                      el-option(value="周")
            el-col(:span="12")
              el-form-item(label='值班通知:', prop='name')
                el-radio-group(v-model='ruleForm.resource')
                  el-radio(label='启用')
                  el-radio(label='禁用')
          el-form-item(label='排班规则:', prop='name',:inline="true")
            .table-div2
              el-table(ref='multipleTable',
              :data='tableData',
              style='width: 100%',
              @selection-change='handleSelectionChange'
              :header-cell-style="{'background-color': '#f8f8f8','color': '#999999'}")
                el-table-column(type='index', label='批次', width='55')
                el-table-column(prop='date', label='值班人员')
                  template(slot-scope='scope')
                    el-input(v-model='ruleForm.name')
                el-table-column(prop='date', label='选择值班人员', width='120')
                  template(slot-scope='scope')
                    el-button() 选择 ...
                el-table-column(label='操作', width='55')
                  template(slot-scope='scope')
                    i.el-icon-error-del.el-icon-error
              .schedule-table-add +新增一行
        .dialog-footer(slot='footer')
          el-button(@click="submitForm('ruleForm')") 确 定
          el-button(@click="resetForm('ruleForm')") 取 消

</template>

<script>
  import Title from '../../components/page/Title';
  import Category from '../../components/page/Category';
  import Pagination from '../../components/page/Pagination';

  export default {
    name: "Schedule",
    components: {Title, Category, Pagination},
    data() {
      return {
        dialogVisible1: false,
        value1: '',
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
        },
      }
    },
    methods: {
      add() {
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
  .schedule-table-add{
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
    color: #f88d45;
    cursor: pointer;
    user-select: none;
  }
</style>
