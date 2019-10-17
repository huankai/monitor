<template>
  <a-card :body-style="{ padding: '10px' }" :bordered="true">
    <div id="equipmentTransactionEcharts" style="height: 230px"></div>
  </a-card>
</template>

<script>
  let echarts = require("echarts/lib/echarts");
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');

  /* 设备交易统计*/
  export default {
    name: "EquipmentTransaction",
    data() {
      return {
        text: "2019年设备交易统计",
        subtext: "单位(万)",
        xAxisData: ['扫码', 'POS机', '刷卡'],
        data: [200, 334, 390]
      }
    },
    mounted() {
      let equipmentTransactionEcharts = echarts.init(document.getElementById("equipmentTransactionEcharts"));
      equipmentTransactionEcharts.setOption({
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
            name: '设备交易统计',
            type: 'bar',
            barWidth: '60%',
            data: this.data,
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
</script>

<style scoped>

</style>
