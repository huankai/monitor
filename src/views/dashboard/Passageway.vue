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
                label: {
                  normal: {
                    show: true,
                    formatter: '{b}:{c}',
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                  }
                },
                // labelLine: {
                //   normal: {
                //     show: true // 是否显示类型指向线条
                //   }
                // },
                data: this.dataList

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
