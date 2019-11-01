<template>
  <a-card :body-style="{ padding: '10px' }" :bordered="true">
    <div class="total-num">
      <div class="total-num-t">总交易额</div>
      <div class="total-num-b">
        <span v-for="(item) in items1" class="num-span">
          <vns :start="0" :end="parseInt(item)" :times="10" :speed="50"/>
        </span>
        <span class="num-span1">.</span>
        <span v-for="(item) in items2" class="num-span">
          <vns :start="0" :end="parseInt(item)" :times="10" :speed="50"/>
        </span>
      </div>
    </div>
    <div class="list-num">
      <div class="list-num-l">
        <div class="list-num-l-t">今日交易数</div>
        <div class="list-num-l-b">
          <vns :start="oldTodayTransCount" :end="todayTransCount" :times="10" :speed="50"/>
        </div>
      </div>
      <div class="list-num-r">
        <div class="list-num-l-t">今日总交易额</div>
        <div class="list-num-l-b">
          <vns :start="oldTodayTransAmount" :end="todayTransAmount" :times="10" :speed="50"/>
        </div>
      </div>
      <div class="list-num-l">
        <div class="list-num-l-t">总交易数</div>
        <div class="list-num-l-b">
          <vns :start="oldTotalTransCount" :end="totalTransCount" :times="10" :speed="50"/>
        </div>
      </div>
    </div>
  </a-card>
</template>

<script>
  import vns from 'vue-number-scroll'
  // import NumScroll from './NumScroll'
  /*实时交易 统计滚动*/
  export default {
    name: "RealTransaction",
    components: {
      vns
    },
    props: {
      totalTransCount: {
        type: [String, Number],
        required: false,
        default: 0
      },
      totalTransAmount: {
        default: 0
      },
      todayTransCount: {
        default: 0
      },
      todayTransAmount: {
        default: 0
      },
      oldTransAmount: {
        default: 0
      }
    },
    data() {
      return {
        oldTotalTransCount: 0,
        oldTotalTransAmount: 0,
        oldTodayTransCount: 0,
        oldTodayTransAmount: 0,
        items1: '0',
        items2: '00'
      }
    },
    watch: {
      totalTransCount: function (newVal, oldVal) {
        this.oldTotalTransCount = oldVal
      },
      totalTransAmount: function (newVal, oldVal) {
        this.oldTotalTransAmount = oldVal;
        const arr = newVal.toString().split(".");
        this.items1 = arr[0];
        this.items2 = arr.length > 1 ? arr[1] : "00"

      },
      todayTransCount: function (newVal, oldVal) {
        this.oldTodayTransCount = oldVal
      },
      todayTransAmount: function (newVal, oldVal) {
        this.oldTodayTransAmount = oldVal
      }
    }
  }
</script>

<style scoped>
  .ant-card .field {
    font-size: 16px;
  }

  .ant-card .ant-divider-horizontal {
    margin: 10px 0;
  }

  .total-num {
    width: 100%;
    margin-top: 10px;
  }

  .total-num-t {
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #404040;
    font-weight: bold;
    font-family: PingFangSC-Medium;
  }

  .total-num-b {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    text-align: center;
  }

  .total-num-b .num-span {
    display: inline-block;
    width: 29px;
    height: 40px;
    margin: 0 1px;
  }
  .total-num-b .num-span1 {
    display: inline-block;
    width: 10px;
    height: 40px;
    font-size: 30px;
    color: #2d89e5;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
  }

  .total-num-b .num-span span {
    display: inline-block;
    width: 29px;
    height: 40px;
    line-height: 40px;
    font-size: 30px;
    color: #2d89e5;
    font-weight: bold;
    text-align: center;
    background: url(../../assets/7.png) no-repeat;
    background-size: 29px 40px;
  }

  .list-num {
    width: 100%;
    overflow: hidden;
    margin-top: 15px;
  }

  .list-num-l {
    float: left;
    width: 30%;
    height: 40px;
  }

  .list-num-r {
    float: left;
    width: 40%;
    height: 40px;
  }

  .list-num-l-t {
    width: 100%;
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    color: #999;
    text-align: center;
  }

  .list-num-l-b {
    width: 100%;
    height: 20px;
  }

  .list-num-l-b span {
    display: inline-block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 20px;
    color: #404040;
    text-align: center;
  }
</style>
