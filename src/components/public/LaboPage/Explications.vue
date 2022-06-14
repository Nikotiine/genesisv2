<template>
  <section class="hero is-fullheight mt-6 is-justify-content-space-evenly">
    <h2 class="has-font-gabriola" id="title">Le laboratoire : Explications</h2>
    <p>
      Un laboratoire associatif Dans un souci constant de pérennisation de la
      méthode et des dilution Genesis, le laboratoire est structuré en
      association à but non lucratif (loi 1901). Cela garantit la diffusion des
      produits de MetaHomeopathie au prix le plus bas, ainsi qu’une parfaite
      maitrise de la qualité des dilutions. Seuls les praticiens ayant suivi le
      cursus de formation Genesis peuvent adhérer à l’association.
    </p>
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
