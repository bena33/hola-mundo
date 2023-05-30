<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 0;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<template>
  <div>
    <button v-if="showButton" @click="scrollToTop" type="button" class="btn btn-danger btnfloating btnlg" >
        <img class="fas fa-arrow-up">
    </button>
  </div>
</template>
<style>
.scroll-button {
  position: fixed;
  right: 0,75rem;
  bottom: 0,75rem;
  z-index: 999;
  display:none;
}
</style>
