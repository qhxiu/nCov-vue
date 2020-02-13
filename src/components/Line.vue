<template>
  <div class="line">
    <div class="header">
      <h3>疫情累计趋势</h3>
      <div class="legend">
        <span>新增确诊</span>
        <span>新增疑似</span>
      </div>
    </div>
    <div :style="{width: '100%', height: '300px'}" ref="myLine"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: 'Line',
  mounted() {
    this.chartConfig();
  },
  watch: {
    '$store.state.map.addXAxis': {
      handler(newVal, oldVal){
        this.chartConfig();
      },
    }
  },
  methods: {
    chartConfig(addXAxis) {
      let lineChart = echarts.init(this.$refs.myLine);
      lineChart.setOption({
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        /* toolbox: {
          feature: {
            saveAsImage: {}
          }
        }, */
        align: "center",
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [0].concat(this.$store.state.map.addXAxis)
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "新增确诊",
            type: "line",
            smooth: true,
            data: [0].concat(this.$store.state.map.addConfirm)
          },
          {
            name: "新增疑似",
            type: "line",
            smooth: true,
            data: [0].concat(this.$store.state.map.addSuspect)
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
  .line {
    position: relative;
    margin-bottom: 20px;
  }
  .header {
    position: absolute;
    width: 100%;
    padding-left: 1rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .legend {
    padding-right: 1rem;
    height: 26px;
    line-height: 26px;
    font-size: 13px;
    color: #777;
  }
  .legend span:first-of-type::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: #c23532;
    display: inline-block;
    margin-right: 5px;
  }
  .legend span:last-of-type::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: #304554;
    display: inline-block;
    margin-left: 10px;
    margin-right: 5px;
  }
</style>
