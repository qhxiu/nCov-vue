<template>
  <div class="line">
    <div :style="{width: '350px', height: '300px'}" ref="myLine"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: 'Line',
  mounted() {
    console.log(this.$store.state.map.addXAxis)
    this.chartConfig();
  },
  created() {
    console.log(this.$store.state.map.addXAxis)
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
        toolbox: {
          feature: {
            // saveAsImage: {}
          }
        },
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
            stack: "总量",
            data: [0].concat(this.$store.state.map.addConfirm)
          },
          {
            name: "新增疑似",
            type: "line",
            stack: "总量",
            data: [0].concat(this.$store.state.map.addSuspect)
          }
        ]
      });
    }
  }
};
</script>

<style></style>
