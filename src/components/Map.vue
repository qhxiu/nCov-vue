<template>
  <div class="echarts">
    <div :style="{ height: '350px', width: '100%' }" ref="myEchart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  mounted() {
    this.mapConfig();
  },
  watch: {
    '$store.state.map.mapData'(newVal, oldVal) {
      this.mapConfig();
    }
  },
  methods: {
    mapConfig() {
      let mapChart = echarts.init(this.$refs.myEchart);
      const province = false;
      mapChart.setOption({
        visualMap: {
        show: true,
        type: "piecewise",
        min: 0,
        max: 2000,
        align: "right",
        top: province ? 0 : "40%",
        right: 0,
        left: province ? 0 : "auto",
        inRange: {
          color: ["#ffc0b1", "#ff8c71", "#ef1717", "#9c0505"]
        },
        pieces: [
          { min: 10000 },
          { min: 1000, max: 9999 },
          { min: 500, max: 999 },
          { min: 100, max: 499 },
          { min: 10, max: 99 },
          { min: 1, max: 9 }
        ],
        padding: 5,
        // "inverse": false,
        // "splitNumber": 5,
        orient: province ? "horizontal" : "vertical",
        showLabel: province ? false : true,
        text: ["高", "低"],
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 10
        }
        // "borderWidth": 0
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          left: "center",
          // top: '15%',
          // bottom: '10%',
          type: "map",
          name: "确诊人数",
          silent: province ? true : false,
          label: {
            show: true,
            position: "inside",
            // margin: 8,
            fontSize: 6
          },
          mapType: "china",
          data: this.$store.state.map.mapData,
          zoom: 1.2,
          roam: false,
          showLegendSymbol: false,
          emphasis: {},
          rippleEffect: {
            show: true,
            brushType: "stroke",
            scale: 2.5,
            period: 4
          }
        }
      ]
      });
    }
  }
};
</script>

<style></style>
