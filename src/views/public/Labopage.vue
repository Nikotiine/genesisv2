<template>
  <section class="hero is-fullheight">
    <div class="grid-card">
      <div class="grid-card-child">
        <h1 class="has-font-gabriola">Le laboratoire</h1>
      </div>
      <div
        class="grid-card-child"
        :class="{ selectedCard: view === 'technique' }"
      >
        <div class="card box-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="@/assets/img/logo_labo.jpg" alt="photo du labo" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="has-font-gabriola-sub" v-if="view === 'technique'">
                La technique
              </p>
              <button-anime
                :btnName="card1"
                :width="320"
                v-else
                @click="scrollInView"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- <div
        class="grid-card-child"
        :class="{ selectedCard: view === 'dilutions' }"
      >
        <div class="card box-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="@/assets/img/logo_dilution.jpg" alt="photo du labo" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="has-font-gabriola-sub" v-if="view === 'dilutions'">
                Les dilutions
              </p>
              <button-anime
                :btnName="card2"
                :width="320"
                v-else
                @click="scrollInView"
              />
            </div>
          </div>
        </div>
      </div> -->
      <div
        class="grid-card-child"
        :class="{ selectedCard: view === 'explications' }"
      >
        <div class="card box-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="@/assets/img/logo_explication.jpg"
                alt="photo du labo"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="has-font-gabriola-sub" v-if="view === 'explications'">
                Explication
              </p>
              <button-anime
                :btnName="card3"
                :width="320"
                v-else
                @click="scrollInView"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <labo-technique v-if="view === 'technique'" />
    <labo-dilutions v-if="view === 'dilutions'" />
    <labo-explications v-if="view === 'explications'" />
  </section>
</template>

<script>
import buttonAnime from "@/components/inAllComponents/button.vue";
import LaboTechnique from "@/components/public/LaboPage/Technique.vue";

import LaboExplications from "@/components/public/LaboPage/Explications.vue";
export default {
  components: { buttonAnime, LaboTechnique, LaboExplications },
  name: "LaboPage",
  props: ["view"],
  data() {
    return {
      card1: [
        {
          id: 0,
          name: "Le laboratoire",
          router: {
            name: "labo",
            params: { view: "technique" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      // card2: [
      //   {
      //     id: 0,
      //     name: "Les dilutions",
      //     router: {
      //       name: "labo",
      //       params: { view: "dilutions" },
      //     },
      //     width: "320px",
      //     strokeDasharray1: 140,
      //     strokeDasharray2: 540,
      //     strokeDashoffset: -474,
      //     dashHover: 760,
      //   },
      // ],
      card3: [
        {
          id: 0,
          name: "L'association",
          router: {
            name: "labo",
            params: { view: "explications" },
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
};
</script>

<style lang="scss" scoped>
.grid-card {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 1fr;
  grid-template-areas:
    "title title"
    "card1 card2";
}
@media screen and (max-width: 780px) {
  .grid-card {
    grid-template-columns: 1fr;
    grid-template-rows: 10rem 1fr 1fr;
    grid-gap: 1rem;
    grid-template-areas:
      "title  "
      "card1  "
      "card2  ";
  }
}
</style>
