<template>
  <div>
    <h1>Meilenstein Trend Analyse</h1>
    <div>
      <chart-milestone
        :chartData="data"
        :chartOptions="options"
        :colors="colors"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChartMilestone from "./components/ChartMilestone.vue";
import { useColorPalette } from "./use/colorPalette";

export default defineComponent({
  name: "App",
  setup: () => {
    const colors = useColorPalette(60, 60, 70);
    return {
      options: {
        scales: {
          yAxes: [
            {
              type: "time",
              time: {
                unit: "week",
                displayFormats: {
                  quarter: "MM YYYY",
                },
              },
            },
          ],
          xAxes: [
            {
              type: "time",
              time: {
                unit: "week",
                displayFormats: {
                  quarter: "MM YYYY",
                },
              },
              position: "bottom",
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "M1",
            fill: false,
            borderColor: colors[0],
            data: [
              new Date(2021, 4, 1),
              new Date(2021, 5, 1),
              new Date(2021, 6, 1),
              new Date(2021, 7, 1),
              new Date(2021, 8, 1),
              new Date(2021, 8, 1),
            ],
          },
          {
            label: "M2",
            fill: false,
            borderColor: colors[1],
            data: [
              new Date(2021, 4, 1),
              new Date(2021, 4, 1),
              undefined,
              undefined,
              undefined,
              undefined,
            ],
          },
          {
            label: "M3",
            fill: false,
            borderColor: colors[2],
            data: [
              new Date(2021, 5, 1),
              new Date(2021, 5, 1),
              new Date(2021, 8, 1),
              new Date(2021, 8, 1),
              new Date(2021, 8, 1),
              new Date(2021, 8, 1),
            ],
          },
        ],
        labels: [
          new Date(2021, 3, 1),
          new Date(2021, 4, 1),
          new Date(2021, 5, 1),
          new Date(2021, 6, 1),
          new Date(2021, 7, 1),
          new Date(2021, 8, 1),
        ],
      },
    };
  },
  components: {
    ChartMilestone,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
