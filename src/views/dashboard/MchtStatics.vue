<template>
  <a-card :body-style="{ padding: '10px 10px 0' }" :bordered="false">
    <div class="header">
      <div class="header-t">
        <div class="header-t-l">
          <div class="mer-title">总商户数</div>
          <div class="mer-num">{{ totalMchtCount }}</div>
        </div>
        <div class="header-t-r">
          <div class="mer-title">今日商户数</div>
          <div class="mer-num">{{ todayMchtCount }}</div>
        </div>
      </div>
<!--      <div class="header-b">日增幅&nbsp;&nbsp; {{ increase }} <span><a-icon type="caret-up"/></span></div>-->
    </div>
  </a-card>
</template>
<script>
  /*商户统计*/
  export default {
    name: "MchtStatics",
    props: {
      totalMchtCount: {
        default: 1
      },
      todayMchtCount: {
        default: 1
      },
      increase: {
        type: String,
        default: ""
      }
    }
  }
</script>
<style scoped>
  .header {
    width: 100%;
    height: 146px;
  }
  .header-t {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #eee;
  }
  .header-t-l {
    width: 50%;
    height: 100px;
    float: left;
  }
  .header-t-r {
    width: 50%;
    height: 100px;
    float: right;
  }
  .mer-title {
    text-align: center;
    font-size: 24px;
    line-height: 40px;
    color: #999;
  }
  .mer-num {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    line-height: 60px;
  }
  .header-b {
    width: 100%;
    height: 46px;
    text-indent: 45px;
    line-height: 46px;
    font-size: 18px;
  }
  .header-b .anticon-caret-up {
    display: inline;
    color: red;
  }
</style>
