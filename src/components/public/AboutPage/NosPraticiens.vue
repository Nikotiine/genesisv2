<template>
  <section class="hero is-fullheight" id="title">
    <div class="grid-info">
      <div class="info">
        <maps-leaflet :markers="markers" />
      </div>
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
    </div>
  </section>
</template>

<script>
import { latLng } from "leaflet";
import axios from "axios";
import MapsLeaflet from "@/components/public/MapsLeaflet.vue";
export default {
  name: "NosPraticiens",
  components: {
    MapsLeaflet,
  },
  data() {
    return {
      markers: [],
    };
  },
  mounted() {
    axios.get("public/praticiens").then((res) => {
      console.log(res.data);
      this.markers = res.data.map((user) => {
        return {
          id: user.userAdress.userId,
          name: user.lastName + " " + user.firstName,
          telephone: "",
          adresse: user.userAdress.adressePro,
          geoloc: latLng(
            user.userAdress.geoLocPro?.coordinates[0],
            user.userAdress.geoLocPro?.coordinates[1]
          ),
          check: false,
        };
      });
    });
    setTimeout(() => {
      document.getElementById("title").scrollIntoView({ behavior: "smooth" });
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.info:nth-child(2) {
  grid-area: info;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-right: 33%;
}
.info:nth-child(1) {
  grid-area: map;
}
</style>
