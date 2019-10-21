<template>
  <div class="chat" id="provinceDistribution"></div>
</template>

<script>
  let echarts = require("echarts/lib/echarts");
  require("echarts/map/js/china");
  /*全国各省商户分布图*/
  export default {
    name: "Distribution",
    props: {
      provinceAmount: {
        type: Array,
        default: []
      }
    },
    data() {
      return {}
    },
    watch: {
      provinceAmount: "drawing"
    },
    mounted() {
      this.drawing();
    },
    methods: {
      drawing() {
        let provinceDis = echarts.init(document.getElementById("provinceDistribution"));
        provinceDis.setOption({
          backgroundColor: '#fff',
          title: [{
            text: '各省交易金额分布图',
            subtext: "单位(元)",
            left: 'center'
          }, {
            id: 'statistic',
            text: 'xxx',
            right: 120,
            top: 40,
            width: 100,
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          }],
          //地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
          //要显示散点图，必须填写这个配置
          geo: {
            show: true,
            roam: false, //是否允许鼠标滚动放大，缩小
            map: 'china',
            label: {  //图形上的文本标签，可用于说明图形的一些数据信息
              show: true,  //是否显示文本
              color: '#CCC',  //文本颜色
            },
            itemStyle: { //地图区域的多边形 图形样式。 默认样试。
              areaColor: '#2d89e5', //地图区域的颜色。
              borderColor: '#111', //边框线
            },
            emphasis: { //高亮状态下的多边形和标签样式。
              label: { //文本
                color: '#ADA',
              },
              itemStyle: { //区域
                areaColor: '#F60'
              }
            }
          },
          tooltip: {
            show: true,
            trigger: 'item',
            formatter: function (a) {
              return a.data.name + ": " + a.data.value[2];
            }
          },
          //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
          visualMap: {
            min: 0, //最小值
            max: 1, //最大值
            calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
            inRange: {
              color: ['#e83e5e', '#fb2a08', '#d6f628'] //颜色
            },
            textStyle: {
              color: '#fff'
            },
          },
          series: [
            {
              type: 'effectScatter', //样试
              coordinateSystem: 'geo', //该系列使用的坐标系
              data: this.provinceAmount,
              itemStyle: {
                normal: {
                  color: '#d6f628',
                  label: {
                    show: true,
                    formatter: '{b}\n{c}',
                  },
                  borderWidth: 0
                }
              },
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: false
                }
              },
              //标记的大小,可以设置数组或者函数返回值的形式
              symbolSize: function (val) {
                return Math.sqrt(val[2]) / 100;
              },
              rippleEffect: { //涟漪特效相关配置。
                brushType: 'stroke' //波纹的绘制方式
              },
              hoverAnimation: true, //鼠标移入放大圆
            }
          ]
        });
      }
    }
  }
</script>

<style scoped>

  .chat {
    height: 530px;
  }
</style>
