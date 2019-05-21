<template lang="pug">
  .page
    Title
    Category
    .btn-div
      div
        el-button(icon="el-icon-plus", @click="handCreate") 手动创建
        el-button(icon="el-icon-turn-off-microphone",  @click="mute") 全局静音
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
            el-button(@click='handleClick(scope.row)', type='text', size='small') 详情
            el-button(@click='', type='text', size='small') 恢复
            el-button(@click.native.prevent="deleteRow(scope.$index, tableData)", type='text', size='small') 关闭
    Pagination
    //手动创建告警
    .popup
      el-dialog(title='手动创建告警', :visible.sync='dialogVisible1')
        el-form.form1(:model='ruleForm', :rules='rules', label-position="left", ref='ruleForm', label-width='8rem')
          el-form-item(label='告警标题:', prop='name')
            el-input(v-model='ruleForm.name')
          el-form-item(label='告警内容:', prop='name',:inline="true")
            el-input(type="textarea", v-model='ruleForm.name')
          el-form-item(label='发送渠道:', prop='type')
            el-checkbox-group(v-model='ruleForm.type')
              el-checkbox(label='邮件', name='type')
              el-checkbox(label='微信', name='type')
              el-checkbox(label='短信', name='type')
              el-checkbox(label='电话', name='type')
          el-form-item(label='接收成员:', prop='name',:inline="true")
            el-input(v-model='ruleForm.name')
            .append-div
              el-popover(placement='left', width='400', trigger='click')
                el-table(:data='gridData')
                  el-table-column(width='150', property='date', label='日期')
                  el-table-column(width='100', property='name', label='姓名')
                  el-table-column(width='300', property='address', label='地址')
                el-button(slot='reference') 选择  ...
          el-form-item(label='告警认领:', prop='name',:inline="true")
            el-radio-group(v-model='ruleForm.resource')
              el-radio(label='是')
              el-radio(label='否')
          el-form-item(label='告警级别:', prop='name',:inline="true")
            el-radio-group(v-model='ruleForm.resource')
              el-radio(label='标准')
              el-radio(label='重要')
              el-radio(label='关键')
        .dialog-footer(slot='footer')
          el-button(@click="submitForm('ruleForm')") 确 定
          el-button(@click="resetForm('ruleForm')") 取 消
    //是否静音
    .popup
      el-dialog(title='提示', :visible.sync='dialogVisible2')
        h2 是否取消全局静音?
        br
        div 当前静音状态剩余 : 50分
        .dialog-footer(slot='footer')
          el-button(@click="submitForm('ruleForm')") 确 定
          el-button(@click="resetForm('ruleForm')") 取 消
    //告警详情
    .popup
      el-dialog(title='告警详情', :visible.sync='dialogVisible3')
        .my-el-form
          el-form(label-position="left", label-width='8rem')
            el-form-item(label='活动名称')
              span 活动名称
          el-form(label-position="left", label-width='8rem')
            el-form-item(label='活动名称')
              span 活动名称
        .my-el-form
          el-form(label-position="left", label-width='8rem')
            el-form-item(label='活动名称')
              span 活动名称
          el-form(label-position="left", label-width='8rem')
            el-form-item(label='活动名称')
              span 活动名称
        .my-el-form
          el-form(label-position="left", label-width='8rem')
            el-form-item(label='活动名称')
              span 活动名称1111111111111111111111111111111111111111111111111
        .my-el-form
          el-form(label-position="left", label-width='8rem')
            el-form-item(label='活动名称')
              span 活动名称1111111111111111111111111111111111111111111111111
        .dialog-footer(slot='footer')
          el-button(@click="submitForm('ruleForm')") 确 定
          el-button(@click="resetForm('ruleForm')") 取 消
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
        dialogVisible1: false,
        dialogVisible2: false,
        dialogVisible3: false,
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
      handCreate() {
        this.dialogVisible1 = true
      },
      mute() {
        this.dialogVisible2 = true
      },
      handleClick(data) {
        this.dialogVisible3 = true
      }
    },
  }
</script>

<style lang="scss" scoped>
  .my-el-form {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
</style>
