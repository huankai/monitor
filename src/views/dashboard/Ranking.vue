<template>
  <a-card :body-style="{ padding: '10px' }" :bordered="false">
    <div class="rank">
      <h4 class="title">{{ title }}</h4>
      <ul class="list">
        <li :key="index" v-for="(item,index) in list">
          <span :class="index < 3 ? 'active'+ (index+1) : null">{{ index + 1 }}</span>
          <span>{{ item.name }}</span>
          <!-- <span>{{ item.value}}</span> -->
          <span>{{ item.value | dealNum}}</span>
        </li>
      </ul>
    </div>
  </a-card>
</template>
<script>
  export default {
    name: "Ranking",
    props: {
      title: {
        type: String,
        default: ''
      },
      list: {
        type: Array,
        default: null
      }
    },
    filters: {
      dealNum (value) {
        var val = Number(value)
        if (val > '10000') {
          return (val/10000).toFixed(2)+"万"
        } else {
          return value
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .rank {

    .list {
      margin: 12px 0 0;
      padding: 0;
      list-style: none;

      li {
        width: 100%;
        margin-top: 8px;
        position: relative;
        padding-left: 44px;
        padding-right: 120px;

        span {
          display: inline-block;
          color: rgba(0, 0, 0, .65);
          font-size: 14px;
          line-height: 22px;
          

          &:first-child {
            position: absolute;
            left: 0;
            top: 0;
            background-color: #f5f5f5;
            border-radius: 20px;
            display: inline-block;
            font-size: 12px;
            font-weight: 600;
            height: 20px;
            line-height: 20px;
            width: 20px;
            text-align: center;
          }
          
          &.active1 {
            background-color: #df1f35;
            color: #fff;
          }
          &.active2 {
            background-color: #f58d28;
            color: #fff;
          }
          &.active3 {
            background-color: #eccd22;
            color: #fff;
          }
          &:nth-of-type(2) {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &:last-child {
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
            text-align: right;
          }
        }
      }
    }
  }

  /*.mobile .rank {*/
    /*padding: 0 32px 32px 32px;*/
  /*}*/

</style>
