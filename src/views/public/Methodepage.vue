<template>
  <section class="hero is-fullheight">
    <div class="main-meta">
      <div class="meta-main">
        <h1 class="has-font-gabriola">Meta-Homeopathie : La methode</h1>
      </div>
      <div class="meta-main">
        <h2 class="has-font-gabriola-sub has-text-secondary">
          La MetaHomeopathie est une technique moderne de soin holistique non
          apparentée à la médecine
        </h2>
      </div>
      <div class="meta-main">
        <p>
          C’est la pièce manquante entre l’Homéopathie Hahnemannienne et les
          science quantiques modernes. Elle emprunte à l’une sa méthode de
          fabrication et à l’autre sa compréhension des différents champs qui
          nous entourent, influencent notre vie, notre santé et notre
          environnement. La somme des recherches et des avancées apportées par
          des générations de praticiens a permis l’émergence de cette méthode
          qui répond de manière non invasive, holistique et efficace à de
          nombreux troubles affligeant l’homme et l’animal. Développée sous sa
          première forme il y a maintenant plus de 200 ans, réinventée
          quotidiennement par des Médecins, des chercheurs et des thérapeutes
          passionnés depuis 50 ans, et enfin remodelée au sein du Laboratoire
          GENESIS depuis 2010, la MetaHomeopathie est un héritage qui mérite un
          travail de conservation et de transmission dans les règles de l’art.
          Le Laboratoire ainsi que la formation Genesis ont été créés pour
          garantir cette continuité de manière sérieuse et durable.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MethodePage",
};
</script>

<style lang="scss" scoped>
.main-meta {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "title title title"
    "subt subt subt"
    "texte texte texte";
}
.meta-main:nth-child(1) {
  grid-area: title;
}
.meta-main:nth-child(2) {
  grid-area: subt;
}
.meta-main:nth-child(3) {
  grid-area: texte;
}
</style>
