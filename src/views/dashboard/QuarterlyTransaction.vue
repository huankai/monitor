<template>
  <a-card :body-style="{ padding: '24px' }" :bordered="false">
    <div id="quarterlyEcharts" style="height: 200px"></div>
  </a-card>
</template>

<script>
  let echarts = require("echarts/lib/echarts");
  require('echarts/lib/chart/pie');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  /* 年季度交易图*/
  export default {
    name: "QuarterlyTransaction",
    data() {
      return {
        text: "2019年季度交易图",
        subtext: "单位(万)",
        legendData: ['一季度', '二季度', '三季度', '四季度'],
        data: [
          {value: 335, name: '一季度'},
          {value: 310, name: '二季度'},
          {value: 234, name: '三季度'},
          {value: 135, name: '四季度'}
        ]
      }
    },
    mounted() {
      let quarterlyTransaction = echarts.init(document.getElementById("quarterlyEcharts"));
      quarterlyTransaction.setOption({
        title: {
          text: this.text,
          subtext: this.subtext,
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.legendData
        },
        series: [
          {
            name: '季度交易',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: this.data,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: '{b}\n{c}',
                },
                borderWidth: 0
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
    }
  }
</script>

<style scoped>

</style>
