<template>
  <div class="echarts">
    <div :style="{ height: '350px', width: '100%' }" ref="myEchart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import pinyin from "pinyin";
export default {
  data() {
    return {
      mapData: []
    };
  },
  props: ["province"],
  mounted() {
    this.mapConfig();
  },
  watch: {
    "$store.state.map.mapData"(newVal) {
      this.mapData = [];
      if (this.province) {
        newVal.forEach(city => {
          this.mapData.push({ value: city.value, name: city.name + "市" });
        });
        this.mapConfig();
      } else {
        this.mapData = this.$store.state.map.mapData;
        this.mapConfig();
      }
    }
  },
  created() {},
  methods: {
    mapConfig() {
      let mapChart = echarts.init(this.$refs.myEchart);
      if (this.province) {
        import(`echarts/map/json/province/${this.province}.json`).then(json => {
          echarts.registerMap(this.province, json.default);
          this.config(mapChart);
        });
      } else {
        import("echarts/map/json/china.json").then(json => {
          echarts.registerMap("china", json.default);
          this.config(mapChart);
        });
      }

      this.config(mapChart);
      mapChart.on("click", params => {
        const name = pinyin(params.name, { style: pinyin.STYLE_NORMAL })
          .join()
          .replace(/\,/g, "");
        if (!this.province) {
          this.$router.push("/" + name).catch(err => {
            err;
          });
        }
      });
    },
    config(chart) {
      chart.setOption({
        visualMap: {
          show: true,
          type: "piecewise",
          min: 0,
          max: 2000,
          align: "center",
          top: this.province ? 0 : "40%",
          right: 0,
          left: this.province ? 0 : "auto",
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

          padding: 2,
          // "inverse": false,
          // "splitNumber": 5,
          orient: this.province ? "horizontal" : "vertical",
          showLabel: true,
          itemWidth: 6,
          itemHeight: 6,
          textStyle: {
            fontSize: 10
          }
        },
        series: [
          {
            left: "center",
            type: "map",
            name: "确诊人数",
            mapType: this.province || "china",
            label: {
              show: true,
              position: "inside",
              fontSize: 8
            },
            data: this.mapData,
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
