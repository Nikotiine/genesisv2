<template>
  <section class="hero is-fullheight mt-6">
    <h2 class="has-font-gabriola" id="title">Formation sans pré-requis</h2>
  </section>
</template>

<script>
export default {
  name: "SansPreRequis",
  mounted() {
    setTimeout(() => {
      document.getElementById("title").scrollIntoView({ behavior: "smooth" });
    }, 500);
  },
};
</script>

<style lang="scss" scoped></style>
