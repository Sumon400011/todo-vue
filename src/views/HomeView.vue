<template>
  <section class="main-section">
    <div class="container-fluid">
      <div class="row my-4">
        <div class="col-12">
          <div
            class="d-flex justify-content-between align-items-center bg-dark-2 main-bar w-100"
          >
            <div class="" style="min-width: 300px">
              <div class="font-weight-bold main-title">Task List</div>
              <div>
                <p class="font-16 mb-2">Priorities</p>
                <PriorityComp />
              </div>
            </div>

            <IconIntros />
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#NoteModal"
              class="btn btn-dark bg-gray-1 shadow-sm border border-dark"
            >
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-3 align-items-stretch"
      >
        <div class="col my-2" v-for="(note, index) in notes" :key="index">
          <CardsComp :note="note" :index="index" @noteRemove="noteRemove" />
        </div>
      </div>
      <ModalComp @saveNoteVal="saveNote" />
    </div>
  </section>
</template>
<script>
import CardsComp from "../components/CardsComp.vue";
import ModalComp from "../components/ModalComp.vue";
import PriorityComp from "../components/PriorityComp.vue";
import IconIntros from "../components/IconIntros.vue";
// import data from "../Data/datas";
export default {
  name: "HomeView",
  components: {
    CardsComp,
    ModalComp,
    PriorityComp,
    IconIntros,
  },
  data() {
    return {
      notes: [],
    };
  },
  methods: {
    saveNote(val) {
      val["id"] = this.notes.length + 1;
      this.notes.push(val);
    },
    noteRemove(index) {
      this.notes.splice(index, 1);
    },
  },
  mounted() {
    if (localStorage.getItem("data")) {
      this.notes = JSON.parse(localStorage.getItem("data"));
    }
  },
  watch: {
    notes: {
      handler() {
        localStorage.setItem("data", JSON.stringify(this.notes));
      },
      deep: true,
    },
  },
};
</script>
