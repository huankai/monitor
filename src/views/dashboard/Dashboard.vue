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
          <mcht-statics :total-mcht-count="totalMchtCount" :today-mcht-count="toDayMchtCount"></mcht-statics>
        </a-row>
        <a-divider dashed style="margin: 2px 0"/>
        <a-row>
          <ranking title="省商户数排行（前10名）" :list="provinceMchtList"></ranking>
        </a-row>
      </a-col>
      <a-col :sm="24" :md="24" :xl="12">
        <distribution :province-amount="provinceAmountList"></distribution>
      </a-col>
      <a-col :sm="24" :md="24" :xl="6">
        <a-row>
          <real-transaction :today-trans-count="realTransaction.todayTransCount"
                            :today-trans-amount="realTransaction.todayTransAmount"
                            :total-trans-count="realTransaction.totalTransCount"
                            :total-trans-amount="realTransaction.totalTransAmount"></real-transaction>
        </a-row>
        <a-divider dashed style="margin: 2px 0"/>
        <a-row>
          <ranking title="商户交易额排行（前10名,单位:元）" :list="mchtTransactionList"></ranking>
        </a-row>
      </a-col>
    </a-row>
    <a-divider dashed style="margin: 2px 0"></a-divider>
    <a-row>
      <a-col :sm="24" :md="24" :xl="6">
        <quarterly-transaction :legend-data="quarterTrans.legendData"
                               :data-list="quarterTrans.dataList"></quarterly-transaction>
      </a-col>
      <a-col :sm="24" :md="24" :xl="6">
        <passageway :legend-data="passagewayTrans.legendData" :data-list="passagewayTrans.dataList"></passageway>
      </a-col>
      <a-col :sm="24" :md="24" :xl="6">
        <equipment-transaction :x-axis-data="yearEquipmentTrans.xaxisData"
                               :data-list="yearEquipmentTrans.dataList"></equipment-transaction>
      </a-col>
      <a-col :sm="24" :md="24" :xl="6">
      </a-col>
      <a-col :sm="24" :md="24" :xl="6">
        <today-equipment-transaction :x-axis-data="todayEquipmentTrans.xaxisData"
                                     :data-list="todayEquipmentTrans.dataList"></today-equipment-transaction>
      </a-col>
    </a-row>
    <a-divider dashed style="margin: 2px 0"></a-divider>
    <a-row>
      <a-col :sm="24" :md="24" :xl="24">
        <amount-transaction :x-axis-data="amountRange.xaxisData" :data-list="amountRange.dataList"></amount-transaction>
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
  // import moment from 'moment';

  import SocketJS from 'sockjs-client'
  import Stomp from 'stompjs'

  export default {
    name: "Dashboard",
    components: {
      MchtStatics, Ranking, Distribution, RealTransaction,
      QuarterlyTransaction, Passageway, EquipmentTransaction,
      TodayEquipmentTransaction, AmountTransaction
    },
    mounted() {
      // let _this = this;
      // this.timer = setInterval(() => {
      //   _this.currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
      // }, 1000);
      this.connect();
    },
    beforeDestroy() {
      // if (this.timer) {
      //   clearInterval(this.timer);
      // }
    },
    data() {
      return {
        currentTime: null,
        provinceMchtList: [], // 省前 10 名商户数
        mchtTransactionList: [], // 商户前10 名交易额排行
        socket: null,
        stompClient: null,

        totalMchtCount: null,
        toDayMchtCount: null,

        provinceAmountList: [],
        realTransaction: {},

        quarterTrans: {
          legendData: [],
          dataList: [],
        },
        passagewayTrans: {
          legendData: [],
          dataList: []
        },
        yearEquipmentTrans: {
          xaxisData: [],
          dataList: []
        },
        todayEquipmentTrans: {
          xaxisData: [],
          dataList: []
        },
        amountRange: {
          xaxisData: [],
          dataList: []
        }
      }
    },
    methods: {
      connect() {
        const socketUrl = process.env.VUE_APP_MONITOR_CONTEXT_PATH + "/endpointMonitor";
        this.socket = new SocketJS(socketUrl);
        this.stompClient = Stomp.over(this.socket);
        this.stompClient.connect({}, (frame) => {
          this.successCallback();
        }, () => {
          this.reconnect(socketUrl, this.successCallback)
        });
      },
      successCallback() {
        this.stompClient.subscribe('/queue/mchtStatics', this.receiveMchtStaticsMessage);
        this.stompClient.subscribe('/queue/topProvinceMcht', this.receiveTopProvinceMcht);
        this.stompClient.subscribe('/queue/provinceAmount', this.receiveprovinceAmount);
        this.stompClient.subscribe('/queue/transStatics', this.receiveTransStatics);
        this.stompClient.subscribe('/queue/sumMchtStatics', this.receiveSumMchtStatics);
        this.stompClient.subscribe('/queue/quarterTransStatics', this.receiveQuarterTransStatics);
        this.stompClient.subscribe('/queue/passagewayTransStatics', this.receivePassagewayTransStatics);
        this.stompClient.subscribe('/queue/yearEquipmentTransStatics', this.receiveYearEquipmentTransStatics);
        this.stompClient.subscribe('/queue/todayEquipmentTransStatics', this.receiveTodayEquipmentTransStatics);
        this.stompClient.subscribe('/queue/amountRangeTransStatics', this.receiveAmountRangeTransStatics);
      },

      reconnect(socketUrl, successCallback) {

      },

      receiveTodayEquipmentTransStatics(payload) {
        this.todayEquipmentTrans = JSON.parse(payload.body).data;
      },
      receiveYearEquipmentTransStatics(payload) {
        this.yearEquipmentTrans = JSON.parse(payload.body).data;
      },
      receiveQuarterTransStatics(payload) {
        this.quarterTrans = JSON.parse(payload.body).data;
      },
      receiveAmountRangeTransStatics(payload) {
        this.amountRange = JSON.parse(payload.body).data;
      },
      receivePassagewayTransStatics(payload) {
        let data = JSON.parse(payload.body);
        this.passagewayTrans = data.data
      },
      receiveSumMchtStatics(payload) {
        this.mchtTransactionList = JSON.parse(payload.body).data;
      },
      receiveTransStatics(payload) {
        let result = JSON.parse(payload.body);
        this.realTransaction = result.data;
      },
      receiveMchtStaticsMessage(payload) {
        let result = JSON.parse(payload.body);
        this.totalMchtCount = result.data.totalMchtCount;
        this.toDayMchtCount = result.data.toDayMchtCount;
      },

      receiveTopProvinceMcht(payload) {
        this.provinceMchtList = JSON.parse(payload.body).data;
      },

      receiveprovinceAmount(payload) {
        this.provinceAmountList = JSON.parse(payload.body).data;
        console.log(this.provinceAmountList);
      },
      disconnect() {
        if (this.stompClient) {
          this.stompClient.disconnect();
        }
      }
    }
  }
</script>

<style scoped>

</style>
