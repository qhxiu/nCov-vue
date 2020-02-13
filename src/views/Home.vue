<template>
  <div class="container">
    <div class="statistics">
      <div class="title">
        <span>疫情情况</span>
        <router-link v-show="province" to="/">返回全国</router-link>
      </div>
      <div class="update-time">
        统计截至<strong>{{ $store.state.map.lastUpdateTime }}</strong
        >更新于<strong>{{ beforeUpdate }}分钟前</strong>
      </div>
      <div class="cards">
        <div class="card confirm">
          <div class="add">
            较上日<span>{{ $store.state.map.statistics.addConfirm }}</span>
          </div>
          <div class="num">{{ $store.state.map.statistics.confirm }}</div>
          <div class="text">全国确诊</div>
        </div>
        <div class="card suspect">
          <div class="add">
            较上日<span>{{ $store.state.map.statistics.addSuspect }}</span>
          </div>
          <div class="num">{{ $store.state.map.statistics.suspect }}</div>
          <div class="text">疑似病例</div>
        </div>
        <div class="card heal">
          <div class="add">
            较上日<span>{{ $store.state.map.statistics.addHeal }}</span>
          </div>
          <div class="num">{{ $store.state.map.statistics.heal }}</div>
          <div class="text">治愈人数</div>
        </div>
        <div class="card dead">
          <div class="add">
            较上日<span>{{ $store.state.map.statistics.addDead }}</span>
          </div>
          <div class="num">{{ $store.state.map.statistics.dead }}</div>
          <div class="text">死亡人数</div>
        </div>
      </div>
    </div>
    <n-map :province="province"></n-map>
    <n-line v-if="!province"></n-line>
    <n-table></n-table>
  </div>
</template>

<script>
import NMap from "../components/Map.vue";
import NLine from "../components/Line.vue";
import NTable from "../components/Table.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    NMap,
    NLine,
    NTable
  },
  data() {
    return {
      province: null
    };
  },
  computed: {
    beforeUpdate() {
      const date = new Date(this.$store.state.map.lastUpdateTime).valueOf();
      const currentTime = new Date().valueOf();
      const gap = currentTime - date;

      const h = Math.floor(Math.floor(gap / 1000) / 3600);
      const m = Math.floor((Math.floor(gap / 1000) % 3600) / 60);
      return h > 0 ? h * 60 + m : m;
    }
  },
  watch: {
    "$route.params.name"(newVal) {
      this.province = newVal;
      this.$store.dispatch("getMapData", newVal);
    }
  },
  created() {
    this.province = this.$route.params.name;
    this.$store.dispatch("getMapData", this.province);
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 768px;
  margin: 0 auto;
}
.statistics {
  padding: 15px;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  a {
    float: right;
    color: #ff961e;
    text-decoration: none;
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
      span,
      .num {
        color: #f55253;
      }
      .text {
        background-color: #ffe0e0;
        border-bottom-left-radius: 5px;
      }
    }
    &.suspect {
      background-color: #fff7ed;
      span,
      .num {
        color: #ff961e;
      }
      .text {
        background-color: #ffeed9;
      }
    }
    &.heal {
      background-color: #f1f8f4;
      span,
      .num {
        color: #178850;
      }
      .text {
        background-color: #dffee6;
      }
    }
    &.dead {
      background-color: #f8f8f8;
      span,
      .num {
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
