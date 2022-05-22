<template>
  <section class="hero is-fullheight" id="title">
    <div class="grid-info">
      <div class="info">
        <p class="has-font-gabriola-sub">Ou trouver ...</p>

        <label
          class="checkbox m-2"
          v-for="checkboxe in markers"
          :key="checkboxe.id"
        >
          <input type="checkbox" class="" v-model="checkboxe.check" />

          {{ checkboxe.name }}
        </label>
      </div>
      <div class="info"><maps-leaflet :markers="markers" /></div>
    </div>
  </section>
</template>

<script>
import { latLng } from "leaflet";
import MapsLeaflet from "@/components/public/MapsLeaflet.vue";
export default {
  name: "InfosUtiles",
  components: {
    MapsLeaflet,
  },
  data() {
    return {
      markers: [
        {
          id: 0,
          name: "Le cabinet",
          adresse: "51 Av. Léopold Fabre Lans en vercors",
          telephone: "0681389671",
          geoloc: latLng(45.127699, 5.589008),
          check: true,
          //icon: require("../assets/iconeMaps/cabmed.png"),
          iconSize: [32, 32],
        },
        {
          id: 1,
          name: "La salle de seminiare",
          adresse: "180 Rue des Écoles, 38250 Lans-en-Vercors",
          telephone: "0681389671",
          geoloc: latLng(45.128078, 5.589974),
          check: true,
          //icon: require("../assets/iconeMaps/salle.png"),
          iconSize: [32, 32],
        },
        {
          id: 2,
          name: "Office du tourisme",
          geoloc: latLng(45.129298, 5.584312),
          check: true,
          //icon: require("../assets/iconeMaps/info.png"),
          iconSize: [32, 32],
        },
        {
          id: 3,
          name: "Hotel Val Fleuri",
          geoloc: latLng(45.129312, 5.58436),
          check: true,
          // icon: require("../assets/iconeMaps/hotel1.png"),
          iconSize: [32, 32],
        },
        {
          id: 4,
          name: "Hotel du col de l arc",
          geoloc: latLng(45.129412, 5.58446),
          check: true,
          // icon: require("../assets/iconeMaps/hotel2.png"),
          iconSize: [32, 32],
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      document.getElementById("title").scrollIntoView({ behavior: "smooth" });
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.info:nth-child(1) {
  grid-area: info;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-right: 33%;
}
.info:nth-child(2) {
  grid-area: map;
}
</style>
