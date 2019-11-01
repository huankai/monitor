<template>
  <a-card :body-style="{ padding: '24px' }" :bordered="true">
    <div id="passagewayEcharts" style="height: 200px"></div>
  </a-card>
</template>

<script>
  let echarts = require("echarts/lib/echarts");
  require('echarts/lib/chart/pie');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');

  /* 通道交易分布*/
  export default {
    name: "Passageway",
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
        text: "2019年通道交易统计图",
        subtext: "单位(元)",
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
        if (this.dataList.length > 0) {
          let passagewayEcharts = echarts.init(document.getElementById("passagewayEcharts"));
          passagewayEcharts.setOption({
            title: {
              text: this.text,
              subtext: this.subtext,
              x: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              x: 'left',
              align: 'auto',
              data: this.legendData
            },
            series: [
              {
                name: '通道交易分布',
                type: 'pie',
                radius: ['0', '50%'],
                avoidLabelOverlap: false,
                data: this.dataList,
                itemStyle: {
                  normal: {
                    labelLine: {
                      show: true,
                      formatter: '{b}\n{c}',
                      smooth:  1,
                      length: 10,
                      length2: 50
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
  }
</script>

<style scoped>

</style>
