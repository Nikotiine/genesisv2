<template>
  <section class="hero is-fullheight mt-6 is-justify-content-space-evenly">
    <h2 class="has-font-gabriola" id="title">Le laboratoire : la technique</h2>
    <div class="grid-technique">
      <div class="technique">
        <p class="has-font-gabriola-sub has-text-secondary">
          Le laboratoire <strong>Genesis</strong> a été créé à des fins de
          recherche et de fabrication de dilutions quantiques, pour un usage
          humain, vétérinaire ou environnemental.
        </p>
      </div>
      <div class="technique">
        <p class="has-text-secondary">
          C’est une structure <strong> associative </strong> dont le but est de
          créer et diffuser les dilutions de MetaHomeopathie pour l’usage
          exclusif des praticiens formés à la méthode Genesis au sein de
          l’Ecole. La fabrication des produits est réalisée entièrement à la
          main, dans le respect des techniques de préparation originelles, sans
          aucune mécanisation. Les dilutions ainsi obtenues ont un potentiel et
          une qualité énergétique exceptionnels.
        </p>
      </div>
      <div class="technique">
        <p class="has-text-secondary">
          Ces préparations sont destinées à un usage humain, vétérinaire ou
          agricole et doivent être utilisées par des professionnels formés
          spécifiquement à la MetaHomeopathie. De par leur mode d’action, tous
          les produits Genesis doivent être utilisé sans ingestion ni contact
          chez l’homme et l’animal, les dilutions de MetaHomeopathie ne sont
          <span class="is-underlined"
            >ni des médicaments ni des compléments alimentaires.</span
          >
        </p>
      </div>
      <div class="technique box-shadow">
        <figure class="image is-1by1">
          <img src="@/assets/img/labo_tech.jpg" alt="" />
        </figure>
      </div>
      <div class="technique box-shadow">
        <figure class="image is-1by1">
          <img src="@/assets/img/logo_labo.jpg" alt="" />
        </figure>
      </div>
    </div>
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

<style lang="scss" scoped>
.grid-technique {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  //justify-items: center;
  align-items: center;
  gap: 1.3rem;
  grid-template-areas:
    "texte1 texte1 texte1"
    "logo1 texte2 texte2"
    "texte3 texte3 logo2";
  & .technique p {
    text-align: justify;
  }
}
.technique:nth-child(1) {
  grid-area: texte1;
  margin: auto;
  width: 80%;
  & p {
    text-align: center;
  }
}
.technique:nth-child(2) {
  grid-area: texte2;
  & p {
    font-size: 1.3rem;
  }
  width: 70%;
  margin: auto;
}
.technique:nth-child(3) {
  grid-area: texte3;
  & p {
    font-size: 1.3rem;
  }
  width: 70%;
  margin: auto;
}
.technique:nth-child(4) {
  grid-area: logo1;
  width: 320px;
  margin-left: 2rem;
}
.technique:nth-child(5) {
  grid-area: logo2;
  width: 320px;
  margin-right: 2rem;
}
@media screen and (max-width: 980px) {
  .grid-technique {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "texte1"
      "logo1"
      "texte2"
      "logo2"
      "texte3";
    & .technique p {
      text-align: start;
    }
  }
  .technique:nth-child(1) {
    & p {
      text-align: justify;
    }
  }
  .technique:nth-child(4) {
    margin: auto;
  }
  .technique:nth-child(5) {
    margin: auto;
  }
}
</style>
