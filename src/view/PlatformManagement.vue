<template lang="pug">
  .page
    Title
    Category
    .table-div
      el-table(ref='multipleTable',
      :data='tableData',
      style='width: 100%',
      @selection-change=''
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
            el-button(@click='handleClick(scope.row)', type='text', size='small') 成员管理
    Pagination
    .popup
      el-dialog(title='成员管理-管理员', :visible.sync='dialogVisible')
        el-transfer(filterable='',
        :titles="['Source', 'Target']"
        :filter-method='filterMethod',
        filter-placeholder='请输入城市拼音',
        v-model='value',
        :data='data')
        .dialog-footer(slot='footer')
          el-button(@click="submitForm('ruleForm')") 确 认
          el-button(@click="resetForm('ruleForm')") 取 消
</template>

<script>
  import Title from '../components/page/Title';
  import Category from '../components/page/Category';
  import Pagination from '../components/page/Pagination';
  export default {
    name: "PlatformManagement",
    components: {Title, Category, Pagination},
    data() {
      const generateData = _ => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        dialogVisible: false,
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
        data: generateData(),
        value: [],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        }
      }
    },
    methods:{
      handleClick(data){
        this.dialogVisible = true
      }
    }
  }
</script>

<style scoped>

</style>
