<template>
  <section class="hero is-fullheight">
    <div class="home-meta">
      <div class="meta">
        <h1 class="has-font-gabriola">Genesis:MetaHomeopathie</h1>
      </div>
      <div class="meta">
        <figure class="image">
          <img src="@/assets/img/logo_meta.png" alt="Logo Genesis" />
        </figure>
      </div>
      <div class="meta">
        <p class="has-text-secondary">
          La pièce manquante entre l’Homéopathie Hahnemannienne et les science
          quantiques modernes :
          <span class="has-font-gabriola-sub has-text-secondary"
            >La MetaHomeopathie</span
          >
        </p>
      </div>
      <div class="meta">
        <button-anime :btnName="bouton" :width="320" />
      </div>
      <div class="meta down-arrow">
        <img
          class="image is-96x96"
          src="@/assets/img/downarrows.png"
          alt="fleches descendantes"
          @click="nextView"
        />
      </div>
    </div>
  </section>
</template>

<script>
import buttonAnime from "../../inAllComponents/button.vue";

export default {
  name: "HomeMeta",
  components: { buttonAnime },
  data() {
    return {
      bouton: [
        {
          id: 0,
          name: "Decouvrir",
          router: "/methode",
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
    };
  },
  methods: {
    nextView: function () {
      this.$emit("next", "homelabo");
    },
  },
};
</script>

<style lang="scss" scoped>
div.meta:nth-child(1) {
  grid-area: hd;
  margin-top: 4rem;
}
div.meta:nth-child(2) {
  grid-area: elG;
  margin: 0 4rem 4rem 0;
}
div.meta:nth-child(3) {
  grid-area: elD;
  font-size: 1.5rem;
  padding: 1rem 3rem;
}
div.meta:nth-child(4) {
  grid-area: btn;
}
div.meta:nth-child(5) {
  grid-area: down;
}

@media screen and (max-width: 880px) {
  div.meta {
    padding: 0.2rem 0.3rem !important;
    margin: 2rem 0 !important;
  }
}
</style>
