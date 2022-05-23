<template>
  <section class="hero is-fullheight" id="homeabout">
    <div class="home-about">
      <div class="home-end">
        <button-anime :btnName="btn1" :width="320" @click="openCloseMaps" />
      </div>
      <div class="home-end">
        <figure class="image">
          <button-anime :btnName="btn2" :width="320" />
        </figure>
      </div>
      <div class="home-end">
        <p class="has-text-secondary">
          c'est la page d'acceuil de Genesis , le liens du dessous t envoie sur
          la methode ainsi je vous explique la methode , suivez le guide ...
        </p>
      </div>
      <div class="home-end">
        <button-anime :btnName="btn3" :width="320" />
      </div>
      <div class="home-end">
        <button-anime :btnName="btn4" :width="320" />
      </div>
    </div>
    <div class="modal is-active" v-if="openMaps">
      <div class="modal-background" @click="openCloseMaps"></div>
      <div class="modal-content">
        <maps-leaflet :markers="markers" />
      </div>
    </div>
  </section>
</template>

<script>
import { latLng } from "leaflet";
import MapsLeaflet from "@/components/public/MapsLeaflet.vue";
import buttonAnime from "../../inAllComponents/button.vue";
export default {
  name: "HomeAbout",
  components: { buttonAnime, MapsLeaflet },
  data() {
    return {
      markers: [
        {
          id: 0,
          name: "Le cabinet",
          adresse: "51 Av. Léopold Fabre Lans en vercors",
          telephone: "0681389671",
          geoloc: latLng(45.128078, 5.589974),
          check: true,
          icon: require("@/assets/markers/marker_cab.png"),
          iconSize: [64, 64],
        },
      ],
      openMaps: false,
      btn1: [
        {
          id: 0,
          name: "Nous trouver",
          router: "",
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      btn2: [
        {
          id: 0,
          name: "Nous contacter",
          router: {
            name: "about",
            params: { view: "nous-contacter" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      btn3: [
        {
          id: 0,
          name: "Nos praticiens",
          router: {
            name: "about",
            params: { view: "nos-praticiens" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      btn4: [
        {
          id: 0,
          name: "Tout savoir",
          router: {
            name: "about",
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
    openCloseMaps: function () {
      this.openMaps = !this.openMaps;
    },
  },
};
</script>

<style lang="scss" scoped>
div.home-end:nth-child(1) {
  grid-area: btn1;
  padding: 2rem;
}
div.home-end:nth-child(2) {
  grid-area: btn2;
  padding: 2rem;
}
div.home-end:nth-child(3) {
  grid-area: texte;
  max-width: 50%;
  margin: auto;
  padding: 2rem;
  font-size: 1.5rem;
}
div.home-end:nth-child(4) {
  grid-area: btn3;
  padding: 2rem;
}
div.home-end:nth-child(5) {
  grid-area: btn4;
  padding: 2rem;
}
@media screen and (max-width: 880px) {
  div.home-end {
    padding: 0.2rem 0.3rem !important;
    margin: 0 !important;
  }
  div.home-end:nth-child(3) {
    max-width: none;
  }
}
</style>
