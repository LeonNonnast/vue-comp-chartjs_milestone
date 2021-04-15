# vue-comp-chartjs_milestone

## how to install

```
npm install vue-comp-chartjs_milestone
```

### add global

```
import MilestoneChart from 'vue-comp-chartjs_milestone';

createApp(App)
  .use(MilestoneChart)
  .mount("#app");

```

### add html

```
const datasets = [];
<v-chart-milestone :chartData="datasets" :chartOptions="options" :colors="colors" />
```

### model - data

```
datasets: Dataset[] ,         // Array with Datasets
labels: Date[],               // Dates
```

### model - datasets

```
label: string ,          // description of milestone
fill: any,               // fill to bottom
borderColor: string,     // color of line
data?: Date[]            // data for each label.
```

### implement code

```
setup: () => {
    const colors = useColorPalette(60, 60, 70);


    return {
      data,
      options,
      colors
    };
```
