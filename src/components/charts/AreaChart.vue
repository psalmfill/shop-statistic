<template>
  <Chart :title="title">
    <div class="chart-area">
      <canvas id="myAreaChart"></canvas>
    </div>
  </Chart>
</template>
<script>

import Chart from "./Chart";
export default {
  name: "AreaChart",
  props: ["title"],
  components: {
    Chart
  }
};
</script>

