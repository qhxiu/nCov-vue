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
    this.chartConfig();
  },
  methods: {
    chartConfig() {
      let lineChart = echarts.init(this.$refs.myLine);
      lineChart.setOption({
        // title: {
        //   text: "疫情新增趋势"
        // },
        tooltip: {
          // trigger: "axis"
        },
        // legend: {
          // data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "新增确诊",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "新增疑似",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      });
    }
  }
};
</script>

<style></style>
