<template>
  <section class="hero is-fullheight mt-6 is-justify-content-space-around">
    <h2 class="has-font-gabriola" id="title">Le Cairn : lieu de formation</h2>
    <div class="photo-cairn">
      <figure class="image is-1by1">
        <img src="@/assets/img/vue_lans_en_vercors.jpg" alt="" />
      </figure>
      <figure class="image is-1by1">
        <img src="@/assets/img/le_cairn_devant.jpg" alt="" />
      </figure>
      <figure class="image is-1by1">
        <img src="@/assets/img/logo_cours.jpeg" alt="" />
      </figure>
      <figure class="image is-1by1">
        <img src="@/assets/img/le_cairn.jpg" alt="" />
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: "LieuDeFormation",
  mounted() {
    setTimeout(() => {
      document.getElementById("title").scrollIntoView({ behavior: "smooth" });
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.photo-cairn {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}
</style>
