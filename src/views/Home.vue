<template>
  <div>
    <div class="statistics">
      <div class="title">疫情情况</div>
      <div class="update-time">
        统计截至<strong>2020</strong>更新于<strong>6分钟前</strong>
      </div>
      <div class="cards">
        <div class="card confirm">
          <div class="add">较上日<span>+5111</span></div>
          <div class="num">17777</div>
          <div class="text">全国确诊</div>
        </div>
        <div class="card suspect">
          <div class="add">较上日<span>+5</span></div>
          <div class="num">17777</div>
          <div class="text">全国确诊</div>
        </div>
        <div class="card heal">
          <div class="add">较上日<span>+5</span></div>
          <div class="num">17777</div>
          <div class="text">全国确诊</div>
        </div>
        <div class="card dead">
          <div class="add">较上日<span>+5</span></div>
          <div class="num">17777</div>
          <div class="text">全国确诊</div>
        </div>
      </div>
    </div>
    <n-map></n-map>
    <n-line></n-line>
    <n-table></n-table>
  </div>
</template>

<script>
import NMap from '../components/Map.vue'
import NLine from '../components/Line.vue'
import NTable from '../components/Table.vue'
import axios from 'axios'
export default {
  name: "Home",
  components: {
    NMap,
    NLine,
    NTable
  },
  created() {
    axios.get('https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5').then(res => {
      console.log(res);
    })
  }
};
</script>
<style lang="scss" scoped>
.statistics {
  padding: 15px;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .update-time {
    font-size: 12px;
    margin: 10px 0;
  }
  .cards {
    display: flex;
    width: 100%;
  }
  .card {
    flex: 1;
    text-align: center;
    margin-right: 5px;
    padding-top: 5px;
    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .add {
      font-size: 12px;
      color: #7c7c7c;
    }
    .num {
      font-size: 22px;
    }
    .text {
      font-size: 12px;
      font-weight: 700;
      width: 100%;
      height: 25px;
      line-height: 25px;
    }
    &.confirm {
      background-color: #fdf1f1;
      span, .num {
        color: #f55253;
      }
      .text {
        background-color: #ffe0e0;
        border-bottom-left-radius: 5px;
      }
    }
    &.suspect {
      background-color: #fff7ed;
      span, .num {
        color: #ff961e;
      }
      .text {
        background-color: #ffeed9;
      }
    }
    &.heal {
      background-color: #f1f8f4;
      span, .num {
        color: #178850;
      }
      .text {
        background-color: #dffee6;
      }
    }
    &.dead {
      background-color: #f8f8f8;
      span, .num {
        color: #66666c;
      }
      .text {
        background-color: #eeeeee;
        border-bottom-right-radius: 5px;
      }
    }
  }
}
</style>
