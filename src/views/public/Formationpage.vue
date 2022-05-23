<template>
  <section class="hero is-fullheight">
    <div class="grid-card">
      <div class="grid-card-child">
        <h1 class="has-font-gabriola">Les formations</h1>
      </div>
      <div
        class="grid-card-child"
        :class="{ selectedCard: view === 'ouvert-a-tous' }"
      >
        <div class="card box-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="@/assets/img/logo_cours.jpeg" alt="photo du labo" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="has-font-gabriola-sub" v-if="view === 'ouvert-a-tous'">
                Sans pré-requis
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
      <div
        class="grid-card-child"
        :class="{ selectedCard: view === 'salle-de-formations' }"
      >
        <div class="card box-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="@/assets/img/le_cairn.jpg" alt="photo du labo" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p
                class="has-font-gabriola-sub"
                v-if="view === 'salle-de-formations'"
              >
                Le Cairn
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
      </div>
      <div
        class="grid-card-child"
        :class="{ selectedCard: view === 'avec-pre-requis' }"
      >
        <div class="card box-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="@/assets/img/logo_cours.jpeg" alt="photo du labo" />
              <img src="@/assets/icones/caduce.png" alt="" id="caduce" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p
                class="has-font-gabriola-sub"
                v-if="view === 'avec-pre-requis'"
              >
                Avec pré-requis
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
    <avec-pre-requis v-if="view === 'avec-pre-requis'" />
    <sans-pre-requis v-if="view === 'ouvert-a-tous'" />
    <lieu-de-formation v-if="view === 'salle-de-formations'" />
  </section>
</template>

<script>
import buttonAnime from "@/components/inAllComponents/button.vue";
import SansPreRequis from "@/components/public/FormationsPage/SansPreRequis.vue";
import AvecPreRequis from "@/components/public/FormationsPage/AvecPreRequis.vue";
import LieuDeFormation from "@/components/public/FormationsPage/LieuDeFormation.vue";
export default {
  name: "FormationPage",
  components: { buttonAnime, SansPreRequis, AvecPreRequis, LieuDeFormation },
  props: ["view"],
  data() {
    return {
      card1: [
        {
          id: 0,
          name: "Sans pré-requis",
          router: {
            name: "formations",
            params: { view: "ouvert-a-tous" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      card2: [
        {
          id: 0,
          name: "Le Cairn",
          router: {
            name: "formations",
            params: { view: "salle-de-formations" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      card3: [
        {
          id: 0,
          name: "Avec pré-requis",
          router: {
            name: "formations",
            params: { view: "avec-pre-requis" },
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
#caduce {
  position: absolute;
  height: 55px;
  width: 55px;
  left: auto;
}
@media screen and (max-width: 1100px) {
  div.grid-card-child:nth-child(3) {
    grid-area: card3;
  }
  div.grid-card-child:nth-child(4) {
    grid-area: card2;
  }
}
</style>
