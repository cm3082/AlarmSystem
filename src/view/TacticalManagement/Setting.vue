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
    //新增策略
    .popup
      el-dialog(title='新建策略', :visible.sync='dialogVisible1')
        el-form.form1(:model='ruleForm', :rules='rules', label-position="left", ref='ruleForm', label-width='8rem')
          el-row(:gutter="20")
            el-col(:span="12")
              el-form-item(label='策略名称:', prop='name')
                el-input(v-model='ruleForm.name')
            el-col(:span="12")
              el-form-item(label='系统类型:', prop='name')
                el-input(v-model='ruleForm.name')
          el-row(:gutter="20")
            el-col(:span="12")
              el-form-item(label='策略名称:', prop='name')
                el-select(v-model='ruleForm.name')
                  el-option(value='海四达')
            el-col(:span="12")
              el-form-item(label='系统类型:', prop='name')
                el-select(v-model='ruleForm.name')
                  el-option(value='海四达')
          el-form-item(label='策略状态:', prop='name',:inline="true")
            el-radio-group(v-model='ruleForm.resource')
              el-radio(label='生效')
              el-radio(label='失效')
          el-form-item(label='告警规则:', prop='name',:inline="true")
            .table-div2
              el-table(ref='multipleTable',
              :data='tableData',
              style='width: 100%',
              @selection-change='handleSelectionChange'
              :header-cell-style="{'background-color': '#f8f8f8','color': '#999999'}")
                el-table-column(type='index', label='序号', width='55')
                el-table-column(prop='date', label='告警IP', width='120')
                  template(slot-scope='scope')
                    el-input(v-model='ruleForm.name')
                el-table-column(prop='name', label='告警事件', width='120')
                  template(slot-scope='scope')
                    el-select(v-model='ruleForm.name')
                      el-option(value='海四达')
                el-table-column(prop='address', label='告警类型', width='120')
                  template(slot-scope='scope')
                    el-select(v-model='ruleForm.name')
                      el-option(value='海四达')
                el-table-column(prop='date', label='告警联系人', width='100')
                  template(slot-scope='scope')
                    el-button() 选择 ...
                el-table-column(label='操作')
                  template(slot-scope='scope')
                    i.el-icon-error-del.el-icon-error
              .add-setting-rule(@click="addSettingRule") +新增规则
        .dialog-footer(slot='footer')
          el-button(@click="submitForm('ruleForm')") 确 定
          el-button(@click="resetForm('ruleForm')") 取 消
    //新增规则
    .popup
      el-dialog(title='新增规则', :visible.sync='dialogVisible2')
        el-form.form1(:model='ruleForm', :rules='rules', label-position="left", ref='ruleForm', label-width='8rem')
          el-form-item(label='策略模板:', prop='name')
            el-select(v-model='ruleForm.name')
              el-option(value='海四达')
          el-form-item(label='策略名称:', prop='name')
            el-input(v-model='ruleForm.name')
          el-row(:gutter="20")
            el-col(:span="9")
              el-form-item(label='默认告警:', prop='name')
                el-radio-group(v-model='ruleForm.resource')
                  el-radio(label='生效')
            el-col(:span="15")
              el-form-item(label='告警方式:', prop='name')
                el-checkbox-group(v-model='ruleForm.type')
                  el-checkbox(label='邮件', name='type')
                  el-checkbox(label='微信', name='type')
                  el-checkbox(label='短信', name='type')
                  el-checkbox(label='电话', name='type')
          el-form-item(label='告警联系人:', prop='name',:inline="true")
            el-button 选择 ...
          el-form-item(label='运营商告警:', prop='name',:inline="true")
            .table-div2
              el-row()
                el-col(:span="4")
                  span 批次
                el-col(:span="20")
                  span 第2批
              el-row()
                el-col(:span="4")
                  span 地区
                el-col(:span="20")
                  el-button 选择 ...
              el-row()
                el-col(:span="4")
                  span 类别
                el-col(:span="20")
                  el-button 选择 ...
              el-row()
                el-col(:span="4")
                  span 运营商
                el-col(:span="20")
                  el-input
              el-row()
                el-col(:span="4")
                  span 告警级别
                el-col(:span="20")
                  el-select
                    el-option
              el-row()
                el-col(:span="4")
                  span 告警方式
                el-col(:span="20")
                  el-checkbox-group
                    el-checkbox(label="邮件")
                    el-checkbox(label="微信")
                    el-checkbox(label="短信")
                    el-checkbox(label="电话")
              el-row()
                el-col(:span="4")
                  span 告警操作人
                el-col(:span="20")
                  el-button 选择 ...
              el-row()
                el-col(:span="4")
                  span 告警内容
                el-col(:span="20")
                  el-input(type="textarea")
              el-row()
                el-col(:span="4")
                  span 操作
                el-col(:span="20")
                  el-button 删除
            .add-div2-bottom
              span +添加运营商
          el-form-item(label='内部人告警:', prop='name',:inline="true")
            .table-div2
              el-row()
                el-col(:span="4")
                  span 批次
                el-col(:span="20")
                  span 第1批
              el-row()
                el-col(:span="4")
                  span 地区
                el-col(:span="20")
                  el-button 选择 ...
              el-row()
                el-col(:span="4")
                  span 类别
                el-col(:span="20")
                  el-button 选择 ...
              el-row()
                el-col(:span="4")
                  span 运营商
                el-col(:span="20")
                  el-input
              el-row()
                el-col(:span="4")
                  span 告警级别
                el-col(:span="20")
                  el-select
                    el-option
              el-row()
                el-col(:span="4")
                  span 告警方式
                el-col(:span="20")
                  el-checkbox-group
                    el-checkbox(label="邮件")
                    el-checkbox(label="微信")
                    el-checkbox(label="短信")
                    el-checkbox(label="电话")
              el-row()
                el-col(:span="4")
                  span 告警操作人
                el-col(:span="20")
                  el-button 选择 ...
              el-row()
                el-col(:span="4")
                  span 告警内容
                el-col(:span="20")
                  el-input(type="textarea")
              el-row()
                el-col(:span="4")
                  span 操作
                el-col(:span="20")
                  el-button 删除
            .add-div2-bottom
              span +添加
        .dialog-footer(slot='footer')
          el-button(@click="submitForm('ruleForm')") 确 定
          el-button(@click="resetForm('ruleForm')") 取 消
</template>

<script>
  import Title from '../../components/page/Title';
  import Category from '../../components/page/Category';
  import Pagination from '../../components/page/Pagination';

  export default {
    name: "Setting",
    components: {Title, Category, Pagination},
    data() {
      return {
        dialogVisible1: false,
        dialogVisible2: true,
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
      addSettingRule(){
        this.dialogVisible1 = false
        this.dialogVisible2 = true
      }
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
  .form1{
    width: 80%;
  }
  .el-icon-error-del{
    cursor: pointer;
  }
  .add-setting-rule{
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
    color: #f88d45;
    cursor: pointer;
    user-select: none;
  }
  .add-div2-bottom{
    width: 100%;
    text-align: center;
    background-color: #fdf5de;
    color: #f88d45;
    border: solid 0.1rem #f88d45;
    span{
      cursor: pointer;
      user-select: none;
    }
  }
</style>
