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
    props: {
      legendData: {
        default: []
      },
      dataList: {
        default: []
      }
    },
    data() {
      return {
        text: "2019年季度交易图",
        subtext: "单位(元)"
      }
    },
    watch: {
      dataList: "drawing"
    },
    mounted() {
      this.drawing()
    },
    methods: {
      drawing() {
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
              data: this.dataList,
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
  }
</script>

<style scoped>

</style>
