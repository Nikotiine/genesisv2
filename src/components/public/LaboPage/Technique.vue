<template>
  <section class="hero is-fullheight mt-6 is-justify-content-space-evenly">
    <h2 class="has-font-gabriola" id="title">Le laboratoire : la technique</h2>
    <p>
      Le laboratoire Genesis a été créé à des fins de recherche et de
      fabrication de dilutions quantiques, pour un usage humain, vétérinaire ou
      environnemental. C’est une structure associative dont le but est de créer
      et diffuser les dilutions de MetaHomeopathie pour l’usage exclusif des
      praticiens formés à la méthode Genesis au sein de l’Ecole. La fabrication
      des produits est réalisée entièrement à la main, dans le respect des
      techniques de préparation originelles, sans aucune mécanisation. Les
      dilutions ainsi obtenues ont un potentiel et une qualité énergétique
      exceptionnels. Ces préparations sont destinées à un usage humain,
      vétérinaire ou agricole et doivent être utilisées par des professionnels
      formés spécifiquement à la MetaHomeopathie. De par leur mode d’action,
      tous les produits Genesis doivent être utilisé sans ingestion ni contact
      chez l’homme et l’animal, les dilution de MetaHomeopathie ne sont ni des
      médicaments ni des compléments alimentaires.
    </p>
  </section>
</template>

<script>
export default {
  name: "LaboTechnique",
  mounted() {
    setTimeout(() => {
      document.getElementById("title").scrollIntoView({ behavior: "smooth" });
    }, 500);
  },
};
</script>

<style lang="scss" scoped></style>
