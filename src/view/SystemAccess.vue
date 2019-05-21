<template lang="pug">
  .page
    Title
    Category
    .btn-div
      div
        el-button(icon="el-icon-plus" @click="add") 新增
        el-button(icon="el-icon-minus") 删除
      .select-div 应用到 &nbsp;: &nbsp;
        el-select(v-model='value', clearable='', placeholder='请选择策略组')
          el-option(v-for='item in options', :key='item.value', :label='item.label', :value='item.value')
    .table-div
      el-table(ref='multipleTable',
      :data='tableData',
      style='width: 100%',
      @selection-change='handleSelectionChange'
      :header-cell-style="{'background-color': '#f8f8f8','color': '#999999'}")
        el-table-column(type='selection', width='55')
        el-table-column(prop='date', label='接入ID')
        el-table-column(prop='name', label='接入秘钥')
          template(slot-scope='scope')
            span(style='padding-right: 0.5rem') {{scope.row.name}}
            el-tag(type="warning" style='cursor: pointer;user-select: none;') 复制
        el-table-column(prop='address', label='地址',show-overflow-tooltip)
        el-table-column(prop='date', label='日期')
        el-table-column(prop='name', label='姓名')
        el-table-column(prop='address', label='地址')
        el-table-column(label='操作')
          template(slot-scope='scope')
            el-button(@click='handleClick(scope.row)', type='text', size='small') 编辑
            el-button(@click.native.prevent="deleteRow(scope.$index, tableData)", type='text', size='small') 删除
    Pagination
    .popup
      el-dialog(title='新增系统接入', :visible.sync='dialogVisible')
        el-form.form1(:model='ruleForm', :rules='rules', label-position="left", ref='ruleForm', label-width='8rem')
          el-form-item(label='接入ID:', prop='name')
            el-input(v-model='ruleForm.name')
          el-form-item(label='接入秘钥:', prop='name',:inline="true")
            el-input(v-model='ruleForm.name')
            .append-div
              el-button(@click.prevent="removeDomain(domain)") 随机生成
          el-form-item(label='活动区域', prop='region')
            el-select(v-model='ruleForm.region', placeholder='请选择')
              el-option(label='区域一', value='shanghai')
              el-option(label='区域二', value='beijing')
          el-form-item(label='系统名称:', prop='name',:inline="true")
            el-input(v-model='ruleForm.name', placeholder='请输入系统名称')
          el-form-item(label='子系统名称:', prop='name',:inline="true")
            el-input(v-model='ruleForm.name', placeholder='请输入子系统名称')
          el-form-item(label='应用到:', prop='name',:inline="true")
            el-input(v-model='ruleForm.name')
            .append-div
              el-popover(placement='left', width='400', trigger='click')
                el-table(:data='gridData')
                  el-table-column(width='150', property='date', label='日期')
                  el-table-column(width='100', property='name', label='姓名')
                  el-table-column(width='300', property='address', label='地址')
                el-button(slot='reference') 选择  ...
        .dialog-footer(slot='footer')
          el-button(@click="submitForm('ruleForm')") 新 增
          el-button(@click="resetForm('ruleForm')") 取 消

</template>

<script>
  import Title from '../components/page/Title';
  import Category from '../components/page/Category';
  import Pagination from '../components/page/Pagination';
  import {mapState, mapActions} from 'vuex';

  export default {
    name: 'SystemAccess',
    components: {Title, Category, Pagination},
    data() {
      return {
        dialogVisible: false,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
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
    computed: {
      ...mapState(["user", "report"]),
    },
    methods: {
      ...mapActions([
        'getChessData', 'setChessData'
      ]),
      add() {
        this.dialogVisible = true
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="scss">
  .select-div {
    float: right;
  }
</style>
