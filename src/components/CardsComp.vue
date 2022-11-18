<template>
  <div class="card shadow-sm bg-gray-3">
    <div class="card-header">
      <p class="font-12 text-end">
        {{ note.created }}
        <span class="ms-2"><i class="fa-solid fa-calendar-check"></i></span>
      </p>
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ note.title }}</h3>
      <p class="card-text color-text-1">
        {{ note.content }}
      </p>
    </div>
    <div class="card-footer text-end">
      <div class="d-flex align-items-center">
        <div
          class="circle bg-accent me-2"
          v-if="note.priority == 'Normal'"
        ></div>
        <div
          class="circle bg-warning me-2"
          v-if="note.priority == 'Medium'"
        ></div>
        <div
          class="circle bg-negative me-2"
          v-if="note.priority == 'High'"
        ></div>
        <div class="d-flex ms-auto">
          <div class="icons" @click="removeItem(index)">
            <i class="fa-solid fa-trash-can"></i>
          </div>
          <div class="icons"><i class="fa-solid fa-pen-to-square"></i></div>
          <div class="icons" style="font-size: 17px">
            <i class="fa-solid fa-square-check"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardsComp",
  props: ["note", "index"],
  // data() {

  // },
  methods: {
    removeItem(index) {
      // console.log(index);
      this.$emit("noteRemove", index);
    },
  },
};
</script>
