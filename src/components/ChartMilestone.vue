<template>
  <div class="chart_milestone">
    <canvas id="chart"></canvas>
  </div>
</template>

<script lang="ts">
import { CanvasHTMLAttributes, defineComponent } from "vue";
import { Chart } from "chart.js";

export default {
  name: "ChartMilestone",
  setup() {
    // cannot use in chart 3
  },
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    chartOptions: {
      type: Object,
      default: null,
    },
  },
  methods: {
    renderChart: function () {
      const ctx = (document.getElementById(
        "chart"
      ) as HTMLCanvasElement).getContext("2d");
      if (!ctx) return;
      const exampleChart = new Chart(ctx, {
        type: "line",
        data: (this as any).data as any,
        options: (this as any).options as any,
      });
    },
  },
  mounted: function () {
    (this as any).renderChart();
  },
  computed: {
    data: function (): any {
      let data = ((this as any).$props as any).chartData || [];
      if (!data.datasets.find((set: any) => set.label === "closing line")) {
        const dataSetCloseLine = {
          label: "closing line",
          fill: true,
          color: "#00ff00",
          data: data.labels,
        };
        data.datasets.push(dataSetCloseLine);
      }
      return data;
    },
    options: function (): any {
      const config = {
        xAxes: [{ position: "top" }],
      };
      return {
        ...(((this as any).$props as any).chartOptions || {}),
        ...config,
      };
    },
  },
};
</script>

<style scoped lang="scss"></style>
