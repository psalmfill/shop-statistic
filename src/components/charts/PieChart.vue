<template>
  <Chart :title="title">
    <div class="chart-pie pt-4 pb-2">
      <canvas id="myPieChart"></canvas>
    </div>
    <div class="mt-4 text-center small">
      <span class="mr-2">
        <i class="fas fa-circle text-primary"></i> Direct
      </span>
      <span class="mr-2">
        <i class="fas fa-circle text-success"></i> Social
      </span>
      <span class="mr-2">
        <i class="fas fa-circle text-info"></i> Referral
      </span>
    </div>
  </Chart>
</template>
<script>
import Chart from "./Chart";
export default {
  name: "PieChart",
  props: ["title"],
  components: {
    Chart
  }
};
</script>

