<template>
  <a-card :body-style="{ padding: '10px' }" :bordered="true">
    <a-row>
      <a-col :span="24">
        <label>
          <span class="field">今日交易数: </span>
        </label>
        {{ todayCount }} 次
      </a-col>
    </a-row>
    <a-divider dashed></a-divider>
    <a-row>
      <a-col :span="24">
        <label>
          <span class="field">今日交易总金额: </span>
        </label>
        ￥ {{ todayTotal }} 元
      </a-col>
    </a-row>
    <a-divider dashed></a-divider>
    <a-row>
      <a-col :span="24">
        <label>
          <span class="field">总交易数: </span>
        </label>
        {{ totalTransactionCount }} 次
      </a-col>
    </a-row>
    <a-divider dashed></a-divider>
    <a-row>
      <a-col :span="24">
        <label>
          <span class="field">交易总金额: </span>
        </label>
        ￥ {{ totalTransaction }} 元
      </a-col>
    </a-row>
  </a-card>
</template>

<script>

  /*实时交易 统计滚动*/
  export default {
    name: "RealTransaction",
    data() {
      return {
        todayCount: 1092,
        todayTotal: 10999,
        totalTransactionCount: 10987,
        totalTransaction: 1979789
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
</style>
