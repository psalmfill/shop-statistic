<template>
  <div class="card  shadow h-100 py-2" :class="borderLeftColor">
    <div class="card-body">
      <div class="row no-gutters align-items-center">
        <div class="col mr-2">
          <div class="text-xs font-weight-bold text-uppercase mb-1" :class="textColor">{{title}}</div>
          <div class="h5 mb-0 font-weight-bold text-gray-800">{{unit}}</div>
        </div>
        <div class="col-auto">
          <i class="fa-2x text-gray-300" :class="icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"RequestCard",
    props: ["title", "unit", "icon", "textColor", "borderLeftColor"]

}
</script>

