<template>
  <div class="d-flex flex-column px-4 me-auto">
    <div class="d-flex align-items-center mb-1 me-3">
      <div class="me-2">
        <i class="fa-solid fa-calendar-check"></i>
      </div>
      <div class="font-12">Created Date</div>
    </div>
    <div class="d-flex align-items-center mb-1 me-3">
      <div class="me-2">
        <i class="fa-solid fa-square-check"></i>
      </div>
      <div class="font-12">Done</div>
    </div>
    <div class="d-flex align-items-center mb-1 me-3">
      <div class="me-2">
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
      <div class="font-12">Edit</div>
    </div>
    <div class="d-flex align-items-center mb-1 me-3">
      <div class="me-2">
        <!-- <i class="fa-solid fa-trash"></i> -->
        <i class="fa-solid fa-trash-can"></i>
      </div>
      <div class="font-12">Remove</div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "IconIntros",
};
</script>
