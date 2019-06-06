<template lang="pug">
  .page
    Title
    Category
    .btn-div
      .select-div
        div 统计方式&nbsp;&nbsp;:&nbsp;&nbsp;
        el-select(v-model='value1',placeholder='请选择')
          el-option(label='区域一', value='shanghai')
          el-option(label='区域二', value='beijing')
      .select-div
        div 通道范围&nbsp;&nbsp;:&nbsp;&nbsp;
        el-select(v-model='value2',placeholder='请选择')
          el-option(label='区域一', value='shanghai')
          el-option(label='区域二', value='beijing')
      .select-div
        div 起止时间&nbsp;&nbsp;:&nbsp;&nbsp;
        el-date-picker(v-model='value3',
        type='daterange',
        range-separator='-',
        start-placeholder='开始日期',
        end-placeholder='结束日期')
      .select-div
        div 快速选择&nbsp;&nbsp;:&nbsp;&nbsp;
        el-select(v-model='value4',placeholder='请选择')
          el-option(label='区域一', value='shanghai')
          el-option(label='区域二', value='beijing')
    .table-div
      .my-table
        .my-table-title 告警发送汇总图
        .my-chart
          #myChart(:style="{width: '100%', height: '27rem'}")
      .my-table
        .my-table-title 告警分布发送图
        #myChart1(:style="{width: '100%', height: '26rem'}")
      .my-table
        .my-table-title 告警发送走势图
        #myChart2(:style="{width: '100%', height: '26rem'}")
      .my-table
        .my-table-title 排名统计
        #myChart3(:style="{width: '100%', height: '26rem'}")

</template>

<script>
  import Title from '../../components/page/Title';
  import Category from '../../components/page/Category';
  import {mapState, mapActions} from 'vuex';

  export default {
    name: 'Global',
    components: {Title, Category},
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
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
    // mounted() {
    //   setTimeout(() => {
    //     this.drawLine();
    //   })
    //   // var self = this
    //   // this.getChessData.then(res=>{
    //   //   self.value1 = res.vaule
    //   // })
    // },
    watch: {
      dataview: function (newValue, oldValue) {
        this.drawLine();
      }
    },
    mounted(){

    },
    created() {
      this.getDataview()
    },
    computed: {
      // ...mapState(["user", "report"]),
      dataview() {
        return this.$store.state.report.dataview
      }
    },
    methods: {
      ...mapActions([
        'getChessData', 'setChessData', 'getDataview'
      ]),
      drawLine() {
        var self = this
        console.log(self.dataview.templatename)
        console.log(self.dataview['templatedatas'])
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {text: ''},
          tooltip: {},
          xAxis: {
            data: self.dataview['templatename']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: self.dataview['templatedatas']
          }]
        });
        window.onresize = function () {
          myChart.resize();
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  .select-div {
    display: flex;
    align-items: baseline;
    flex-wrap: nowrap;
    margin: 0.5rem 0;
    white-space: nowrap;
  }

  .my-table {
    margin-bottom: 1rem;
    height: 30rem;
    width: 49%;
    border: solid 0.1rem var(--dark_grey);
    .my-table-title {
      text-align: center;
      color: var(--dark_grey);
      height: 3rem;
      line-height: 3rem;
      background-color: var(--grey);
      border-bottom: solid 0.1rem var(--dark_grey);
    }
    .my-chart {
      width: 100%;
      height: 27rem;
    }
  }

</style>
