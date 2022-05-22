<template>
  <div class="map1s">
    <l-map v-model="zoom" v-model:zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-control-layers />

      <div v-for="marker in markers" :key="marker.name">
        <l-marker v-if="marker.check" :lat-lng="marker.geoloc">
          <!-- <l-icon :icon-url="marker.icon" :icon-size="marker.iconSize" /> -->
          <l-popup
            >{{ marker.name }}
            <p>{{ marker.adresse }}</p>
            <p>{{ marker.telephone }}</p>
          </l-popup>
        </l-marker>
      </div>
    </l-map>
  </div>
</template>
<script>
import { latLng } from "leaflet";

import {
  LMap,
  // LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  //LTooltip,
  LPopup,
  //   LPolyline,
  //   LPolygon,
  //   LRectangle,
} from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    // LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    //LTooltip,
    LPopup,
    // LPolyline,
    // LPolygon,
    // LRectangle,
  },
  name: "MapsLeaflet",
  props: ["markers"],
  data() {
    return {
      zoom: 13,
      center: latLng(45.128078, 5.589974),
      url: "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
    };
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.map1s {
  height: 75vh;
  width: 50vw;
}
@media screen and (max-width: 1024px) {
  .map1s {
    width: 65vw !important;
  }
}
@media screen and (max-width: 768px) {
  .map1s {
    width: 90vw !important;
  }
}
</style>
