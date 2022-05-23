<template>
  <section class="hero is-fullheight" id="homeformation">
    <div class="home-meta">
      <div class="meta">
        <h2 class="has-font-gabriola">Les formations</h2>
      </div>
      <div class="meta">
        <figure class="image">
          <img src="@/assets/img/logo_forma.jpg" alt="Logo Genesis" />
        </figure>
      </div>
      <div class="meta">
        <p class="has-text-secondary">
          c'est la page d'acceuil de Genesis , le liens du dessous t envoie sur
          la methode ainsi je vous explique la methode , suivez le guide ...
        </p>
      </div>
      <div class="meta">
        <button-anime :btnName="bouton" :width="320" />
      </div>
      <div class="meta down-arrow">
        <img
          class="image is-96x96 cursor"
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
  name: "HomeFormations",
  components: { buttonAnime },
  data() {
    return {
      bouton: [
        {
          id: 0,
          name: "Les formations",
          router: "/formations",
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
      this.$emit("next", "homeabout");
    },
  },
};
</script>

<style lang="scss" scoped>
div.meta:nth-child(1) {
  grid-area: hd;
}
div.meta:nth-child(2) {
  grid-area: elG;
  margin: 4rem 0rem 0rem 0;
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
    margin: 0 !important;
  }
  div.meta:nth-child(1) {
    grid-area: elG;
  }
  div.meta:nth-child(2) {
    grid-area: hd;
  }
}
</style>
