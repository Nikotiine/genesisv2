<template>
  <section class="hero is-fullheight" id="homelabo">
    <div class="home-labo">
      <div class="labo">
        <h2 class="has-font-gabriola">Le laboratoire</h2>
      </div>
      <div class="labo">
        <figure class="image">
          <img src="@/assets/img/logo_labo.jpg" alt="Logo Genesis" />
        </figure>
      </div>
      <div class="labo">
        <p class="has-text-secondary m-t-3r">
          c'est la page d'acceuil de Genesis , le liens du dessous t envoie sur
          la methode ainsi je vous explique la methode , suivez le guide ...
        </p>
      </div>
      <div class="labo">
        <button-anime :btnName="bouton" :width="320" />
      </div>
      <div class="labo down-arrow">
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
  name: "HomeLabo",
  components: { buttonAnime },
  props: ["next"],
  data() {
    return {
      bouton: [
        {
          id: 0,
          name: "le Labo",
          router: {
            name: "labo",
            params: { view: "accueil" },
          },
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
      this.$emit("next", "homeformation");
    },
  },
};
</script>

<style lang="scss" scoped>
div.labo:nth-child(1) {
  grid-area: hd;
}
div.labo:nth-child(2) {
  grid-area: elD;
  margin: 2rem 0rem 0rem 3rem;
}
div.labo:nth-child(3) {
  grid-area: elG;
  font-size: 1.5rem;
  padding: 1rem 3rem;
}
div.labo:nth-child(4) {
  grid-area: btn;
}
div.labo:nth-child(5) {
  grid-area: down;
}
@media screen and (max-width: 880px) {
  div.labo {
    padding: 0.2rem 0.3rem !important;
    margin: 0 !important;
  }
  div.labo:nth-child(2) {
    grid-area: hd;
  }
  div.labo:nth-child(1) {
    grid-area: elG;
  }
  div.labo:nth-child(3) {
    grid-area: elD;
  }
}
</style>
