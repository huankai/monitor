<template>
  <a-card :body-style="{ padding: '10px' }" :bordered="true">
    <a-row>
      <a-col :span="24">
        <label>
          <span class="field">今日交易数: </span>
        </label>
        {{ todayTransCount }} 次
      </a-col>
    </a-row>
    <a-divider dashed></a-divider>
    <a-row>
      <a-col :span="24">
        <label>
          <span class="field">今日总交易额: </span>
        </label>
        ￥ {{ todayTransAmount }} 元
      </a-col>
    </a-row>
    <a-divider dashed></a-divider>
    <a-row>
      <a-col :span="24">
        <label>
          <span class="field">总交易数: </span>
        </label>
        {{ totalTransCount }} 次
      </a-col>
    </a-row>
    <a-divider dashed></a-divider>
    <a-row>
      <a-col :span="24">
        <label>
          <span class="field">总交易额: </span>
        </label>
        ￥ {{ totalTransAmount }} 元
      </a-col>
    </a-row>
  </a-card>
</template>

<script>

  /*实时交易 统计滚动*/
  export default {
    name: "RealTransaction",
    props: {
      totalTransCount: {
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
      }

    },
    data() {
      return {}
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
