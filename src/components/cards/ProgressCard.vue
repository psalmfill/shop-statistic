<template>
  <div class="card border-left-info shadow h-100 py-2">
    <div class="card-body">
      <div class="row no-gutters align-items-center">
        <div class="col mr-2">
          <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
          <div class="row no-gutters align-items-center">
            <div class="col-auto">
              <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{progress}}%</div>
            </div>
            <div class="col">
              <div class="progress progress-sm mr-2">
                <div
                  class="progress-bar bg-info"
                  role="progressbar"
                  :style="{width:`${progress}%`}"
                  :aria-valuenow="progress"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <i class=" fa-2x text-gray-300"  :class="icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "ProgressCard",
    props: ["title", "progress", "icon", "textColor", "borderLeftColor"]
};
</script>
