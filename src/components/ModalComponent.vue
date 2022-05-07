<template lang="">
  <div v-if="showModal">
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ constants[location].title }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="closeModal"
            ></button>
          </div>
          <div class="modal-body">
            <HistoryInfo v-if="showHistoryInfo" />
            <ChallengeComponent
              v-if="!showHistoryInfo"
              :key="`challenge-${location}`"
            />
          </div>
          <div class="modal-footer">
            <button
              v-if="!showHistoryInfo"
              @click="setShowHistoryInfo(true)"
              class="btn btn-primary"
            >
              Show history info
            </button>
            <button
              v-if="showHistoryInfo"
              @click="setShowHistoryInfo(false)"
              class="btn btn-primary"
            >
              Back to challenge
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="closeModal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryInfo from "./HistoryInfo.vue";
import ChallengeComponent from "./ChallengeComponent.vue";
import ChallengeConstants from "../ChallengeConstants";

export default {
  name: "ModalComponent",
  data() {
    return {};
  },
  components: {
    HistoryInfo,
    ChallengeComponent,
  },
  computed: {
    showModal() {
      return this.$store.getters.showModal;
    },
    showHistoryInfo() {
      return this.$store.getters.showHistoryInfo;
    },
    location() {
      return this.$store.getters.location;
    },
    constants() {
      return ChallengeConstants;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("setShowModal", false);
    },
    setShowHistoryInfo(show) {
      this.$store.commit("setShowHistoryInfo", show);
    },
  },
};
</script>

<style scoped>
.modal {
  display: unset !important;
}

.modal-dialog {
  max-width: 800px !important;
}
</style>
