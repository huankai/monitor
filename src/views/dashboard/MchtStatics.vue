<template>
  <a-card :body-style="{ padding: '24px' }" :bordered="false">
    <div class="header">
      <div class="header-t">
        <div class="header-t-l">
          <div class="mer-title">总商户数</div>
          <div class="mer-num">100</div>
        </div>
        <div class="header-t-r">
          <div class="mer-title">今日商户数</div>
          <div class="mer-num">100</div>
        </div>
      </div>
      <div class="header-b">日增幅&nbsp;&nbsp;2% <span><a-icon type="caret-up"/></span></div>
    </div>
  </a-card>
</template>
<script>

  /*商户统计*/
  export default {
    name: "MchtStatics"
  }
</script>
<style scoped>
  .header {
    width: 100%;
    height: 130px;
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
    /*margin-top: 30px;*/
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
    height: 35px;
    text-indent: 45px;
    line-height: 35px;
    font-size: 18px;
  }

  .header-b .anticon-caret-up {
    display: inline;
    color: red;
  }
</style>
