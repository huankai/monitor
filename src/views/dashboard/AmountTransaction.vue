<template>
  <a-card :body-style="{ padding: '10px' }" :bordered="true">
    <div id="amountTransactionEcharts" style="height: 200px"></div>
  </a-card>
</template>

<script>
  let echarts = require("echarts/lib/echarts");
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  /*金额交易图*/
  export default {
    name: "AmountTransaction",
    props: {
      xAxisData: {
        type: Array,
        default: []
      },
      dataList: {
        default: []
      }
    },
    data() {
      return {
        text: "今日价格区间交易统计",
        subtext: "单位(笔)"
      }
    },
    watch: {
      dataList: "drawing"
    },
    mounted() {
      this.drawing();
    },
    methods: {
      drawing() {
        let amountTransactionEcharts = echarts.init(document.getElementById("amountTransactionEcharts"));
        amountTransactionEcharts.setOption({
          title: {
            text: this.text,
            subtext: this.subtext,
            x: 'center'
          },
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: this.xAxisData,
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '价格区间交易统计',
              type: 'bar',
              barWidth: '60%',
              data: this.dataList,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    formatter: '{b}\n{c}',
                  },
                  borderWidth: 0
                }
              }
            }
          ]
        });
      }
    }

  }
</script>

<style scoped>

</style>
