<template>
  <div class="queue">
    <i class="fas fa-indent"></i>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "queue",
  components: {
  },

  computed: {
    // Global Variables
    ...mapGetters(["volume"])
  },

  methods: {
    // Global Function
    ...mapActions(["changeVolume"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.queue {
  display: flex;
  margin-left: 30px;
}
</style>
