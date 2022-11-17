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
          <CardsComp :note="note" />
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
import data from "../Data/datas";
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
      // val.created = this.dateToday;
      console.log("before push", val);
      this.notes.push(val);
      console.log("after push", val);
      console.log("notes", this.notes);
    },
  },
  // computed: {
  //   dateToday() {
  //     const today = new Date();
  //     const yyyy = today.getFullYear();
  //     let mm = today.getMonth() + 1; // Months start at 0!
  //     let dd = today.getDate();

  //     if (dd < 10) dd = "0" + dd;
  //     if (mm < 10) mm = "0" + mm;

  //     return dd + "-" + mm + "-" + yyyy;
  //   },
  // },
  created() {
    this.notes = data;
  },
};
</script>
