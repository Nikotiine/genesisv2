<template>
  <section class="hero is-fullheight is-justify-content-space-evenly">
    <div class="main-meta">
      <div class="meta-main">
        <h1 class="has-font-gabriola text-shadow">
          Meta-Homeopathie : La methode
        </h1>
      </div>
      <div class="meta-main">
        <h2 class="has-font-gabriola-sub has-text-secondary">
          La MetaHomeopathie est une technique moderne de soin holistique non
          apparentée à la médecine
        </h2>
      </div>
      <div class="meta-main">
        <p class="has-text-secondary">
          C’est la pièce manquante entre l’Homéopathie Hahnemannienne et les
          science quantiques modernes. Elle emprunte à l’une sa méthode de
          fabrication et à l’autre sa compréhension des différents champs qui
          nous entourent, influencent notre vie, notre santé et notre
          environnement.
        </p>
      </div>
      <div class="meta-main">
        <p class="has-text-secondary">
          La somme des recherches et des avancées apportées par des générations
          de praticiens a permis l’émergence de cette méthode qui répond de
          manière non invasive, holistique et efficace à de nombreux troubles
          affligeant l’homme et l’animal.
        </p>
      </div>
      <div class="meta-main">
        <p class="has-text-secondary">
          Développée sous sa première forme il y a maintenant plus de 200 ans,
          réinventée quotidiennement par des Médecins, des chercheurs et des
          thérapeutes passionnés depuis 50 ans, et enfin remodelée au sein du
          <strong>Laboratoire GENESIS</strong> depuis 2010, la MetaHomeopathie
          est un héritage qui mérite un travail de conservation et de
          transmission dans les règles de l’art. Le Laboratoire ainsi que la
          formation <strong>Genesis</strong> ont été créés pour garantir cette
          continuité de manière sérieuse et durable.
        </p>
      </div>
      <div class="meta-main box-shadow">
        <figure class="image is-1by1">
          <img src="@/assets/img/logo_dilution.jpg" alt="" />
        </figure>
      </div>
      <div class="meta-main box-shadow">
        <figure class="image is-1by1">
          <img src="@/assets/img/logo_methode.jpg" alt="" />
        </figure>
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
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "title title title"
    "subt subt subt"
    "texte1 texte1 logo2"
    "texte2 texte2 texte2"
    "logo1 texte3 texte3";
  & .meta-main p {
    text-align: justify;
    font-size: 1.3rem;
  }
}
.meta-main:nth-child(1) {
  grid-area: title;
}
.meta-main:nth-child(2) {
  grid-area: subt;
}
.meta-main:nth-child(3) {
  margin: auto;
  width: 60%;
  grid-area: texte1;
}
.meta-main:nth-child(4) {
  grid-area: texte2;
  margin: 0 auto;
  width: 60%;
}
.meta-main:nth-child(5) {
  grid-area: texte3;
  margin: auto;
  width: 60%;
}
.meta-main:nth-child(6) {
  grid-area: logo1;
  width: 320px;
}
.meta-main:nth-child(7) {
  grid-area: logo2;
  width: 320px;
}
</style>
