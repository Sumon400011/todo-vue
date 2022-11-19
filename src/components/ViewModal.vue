<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="viewModal"
    tabindex="-1"
    aria-labelledby="viewModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="viewModalLabel">
            {{ bigNote.title }}
          </h1>
          <button
            type="button"
            class="btn btn-dark bg-gray-1 shadow-sm border border-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
            style="color: white"
            ref="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <div class="modal-body">{{ bigNote.content }}</div>
        <div class="modal-footer">
          <div class="d-flex align-items-center">
            <div
              class="circle bg-accent me-2"
              v-if="bigNote.priority == 'Normal'"
            >
            </div>
            <div
              class="circle bg-warning me-2"
              v-if="bigNote.priority == 'Medium'"
            >
            </div>
            <div
              class="circle bg-negative me-2"
              v-if="bigNote.priority == 'High'"
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewModal",
  props: ["bigNote"],
};
</script>
<style scoped>
.modal-body{
	font-size: 15px;
	font-weight: 300!important;
	line-height: 22px;
	min-height: 400px;
}
</style>