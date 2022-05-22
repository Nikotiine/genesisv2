<template>
  <section class="hero is-fullheight mt-6">
    <h2 class="has-font-gabriola" id="title">Le laboratoire : Explications</h2>
  </section>
</template>

<script>
export default {
  name: "LaboExplications",
  mounted() {
    setTimeout(() => {
      document.getElementById("title").scrollIntoView({ behavior: "smooth" });
    }, 500);
  },
};
</script>

<style lang="scss" scoped></style>
