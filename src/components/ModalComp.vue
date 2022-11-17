<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="NoteModal"
    tabindex="-1"
    aria-labelledby="NoteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="NoteModalLabel">Add Notes</h1>
          <button
            type="button"
            class="btn btn-dark bg-gray-1 shadow-sm border border-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
            style="color: white"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <!-- Title -->
            <div class="mb-3">
              <label for="title" class="form-label">Title</label>
              <input
                type="text"
                class="form-control input-style"
                id="title"
                placeholder="Enter title here"
                v-model="titles"
              />
            </div>
            <!-- priority -->
            <div class="mb-3">
              <label for="priority" class="form-label">Priority</label>
              <select
                id="priority"
                class="form-select input-style"
                aria-label="Default select example"
                v-model="prio"
              >
                <option
                  v-for="(option, index) in options"
                  :value="option.value"
                  :key="index"
                >
                  {{ option.text }}
                </option>
              </select>
            </div>
            <!-- Description -->
            <div class="mb-3">
              <label for="NoteContent" class="form-label">Description</label>
              <textarea
                name="content"
                id="NoteContent"
                class="w-100 input-style"
                rows="5"
                v-model="contents"
              >
              </textarea>
            </div>
            <div class="d-flex justify-content-end">
              <button class="btn submit-btn ms-auto">Add Note</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComp",
  data() {
    return {
      id: null,
      titles: "",
      prio: "Normal",
      contents: "",
      options: [
        { value: "Normal", text: "Normal" },
        { value: "Medium", text: "Medium" },
        { value: "High", text: "High" },
      ],
    };
  },
  methods: {
    handleSubmit() {
      const newNote = {
        title: this.titles,
        priority: this.prio,
        created: this.dateToday,
        content: this.contents,
      };
      this.$emit("saveNoteVal", newNote);
      // this.id = null;
      // this.titles = "";
      // this.prio = "Normal";
      // this.contents = "";
      this.clearModal();
    },
    clearModal() {
      setTimeout(() => {
          this.id = null;
          this.titles = "";
          this.prio = "Normal";
          this.contents = "";
      }, 600);
    },
  },
  computed: {
    dateToday() {
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      return dd + "-" + mm + "-" + yyyy;
    },
  },
};
</script>
