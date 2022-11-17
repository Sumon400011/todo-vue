<template>
  <div class="d-flex">
    <div class="d-flex align-items-center me-3">
      <div class="circle bg-accent me-2"></div>
      <div class="font-12">Normal</div>
    </div>
    <div class="d-flex align-items-center me-3">
      <div class="circle bg-warning me-2"></div>
      <div class="font-12">Medium</div>
    </div>
    <div class="d-flex align-items-center me-3">
      <div class="circle bg-negative me-2"></div>
      <div class="font-12">High</div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "PriorityComp",
};
</script>
