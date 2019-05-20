<template lang="pug">
  .page
    Title
    Category
    .btn-div
      el-button(icon="el-icon-message") 默认按钮
      el-button 默认按钮
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
  import Title from '../components/page/Title';
  import Category from '../components/page/Category';
  import {mapState, mapActions} from 'vuex';

  export default {
    name: 'DataVisualization',
    components: {Title, Category},
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
    mounted() {
      setTimeout(() => {
        this.drawLine();
      })
    },
    computed: {
      ...mapState(["user", "report"]),
    },
    methods: {
      ...mapActions([
        'getChessData', 'setChessData'
      ]),
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {text: ''},
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
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
