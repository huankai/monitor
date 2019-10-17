<template>
  <div>
    <!--<a-row>
      <a-col :sm="24" :md="24" :xl="6">
        <h4 style="text-align: center;font-size: 16px;font-weight: bold">银点科技大数据检测平台</h4>
      </a-col>
      <a-col :sm="24" :md="24" :xl="12">
      </a-col>
      <a-col :sm="24" :md="24" :xl="6">
        <h4>当前系统时间: &nbsp;&nbsp; {{ currentTime }}</h4>
      </a-col>
    </a-row>-->
    <a-row :gutter="24" style="margin-left: 0;margin-right: 0">
      <a-col :sm="24" :md="24" :xl="6">
        <a-row>
          <mcht-statics></mcht-statics>
        </a-row>
        <a-divider dashed style="margin: 2px 0"/>
        <a-row>
          <ranking title="省商户数排行（前10名）" :list="provinceMchtList"></ranking>
        </a-row>
      </a-col>
      <a-col :sm="24" :md="24" :xl="12">
        <distribution></distribution>
      </a-col>
      <a-col :sm="24" :md="24" :xl="6">
        <a-row>
          <real-transaction></real-transaction>
        </a-row>
        <a-divider dashed style="margin: 2px 0"/>
        <a-row>
          <ranking title="商户交易额排行（前10名）" :list="mchtTransactionList"></ranking>
        </a-row>
      </a-col>
    </a-row>
    <a-divider dashed style="margin: 2px 0"></a-divider>
    <a-row>
      <a-col :sm="24" :md="24" :xl="6">
        <quarterly-transaction></quarterly-transaction>
      </a-col>
      <a-col :sm="24" :md="24" :xl="6">
        <passageway></passageway>
      </a-col>
      <a-col :sm="24" :md="24" :xl="6">
        <equipment-transaction></equipment-transaction>
      </a-col>
      <a-col :sm="24" :md="24" :xl="6">
      </a-col>
      <a-col :sm="24" :md="24" :xl="6">
        <today-equipment-transaction></today-equipment-transaction>
      </a-col>
    </a-row>
    <a-divider dashed style="margin: 2px 0"></a-divider>
    <a-row>
      <a-col :sm="24" :md="24" :xl="18">
        <amount-transaction></amount-transaction>
      </a-col>
    </a-row>
  </div>
</template>

<script>

  import MchtStatics from "@/views/dashboard/MchtStatics";
  import Distribution from "@/views/dashboard/Distribution";
  import Ranking from "@/views/dashboard/Ranking";
  import RealTransaction from "@/views/dashboard/RealTransaction";
  import QuarterlyTransaction from "@/views/dashboard/QuarterlyTransaction";
  import Passageway from "@/views/dashboard/Passageway";
  import EquipmentTransaction from "@/views/dashboard/EquipmentTransaction";
  import AmountTransaction from "@/views/dashboard/AmountTransaction";
  import TodayEquipmentTransaction from "@/views/dashboard/TodayEquipmentTransaction";
  import moment from 'moment';

  const provinceMchtList = [{
    name: "广东",
    value: 6298
  }, {
    name: "广西",
    value: 5185
  }, {
    name: "湖南",
    value: 5035
  }, {
    name: "浙江",
    value: 5016
  }, {
    name: "湖北",
    value: 4996
  }, {
    name: "河南",
    value: 4990
  }, {
    name: "重庆",
    value: 3185
  }, {
    name: "贵州",
    value: 2685
  }, {
    name: "福建",
    value: 2185
  }, {
    name: "江西",
    value: 1185
  }];

  const mchtTransactionList = [{
    name: "蜂鸟普惠",
    value: "6298万"
  }, {
    name: "好男人",
    value: "5185万"
  }, {
    name: "喜士多",
    value: "5035万"
  }, {
    name: "咿呀（个体户）",
    value: "5016万"
  }, {
    name: "蜂鸟智慧商圈",
    value: "4996万"
  }, {
    name: "全家生鲜超市",
    value: "4990万"
  }, {
    name: "采蝶轩蛋糕店",
    value: "3185万"
  }, {
    name: "探炉烤鱼",
    value: "2685万"
  }, {
    name: "美宜佳",
    value: "2185万"
  }, {
    name: "超级士多店",
    value: "1185万"
  }];


  export default {
    name: "Dashboard",
    components: {
      MchtStatics, Ranking, Distribution, RealTransaction,
      QuarterlyTransaction, Passageway, EquipmentTransaction,
      TodayEquipmentTransaction, AmountTransaction
    },
    mounted() {
      let _this = this;
      this.timer = setInterval(() => {
        _this.currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
      }, 1000);
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    data() {
      return {
        currentTime: null,
        provinceMchtList, // 省前 10 名商户数
        mchtTransactionList, // 商户前10 名交易额排行
      }
    }
  }
</script>

<style scoped>

</style>
