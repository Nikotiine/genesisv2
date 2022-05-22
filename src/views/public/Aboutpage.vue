<template>
  <section class="hero is-fullheight">
    <div class="grid-about">
      <div class="about">
        <h1 class="has-font-gabriola">Qui sommes nous ?</h1>
      </div>
      <div class="about has-text-secondary">
        <p>on est les best</p>
      </div>
      <div class="about" :class="{ selectedCard: view === 'info-utiles' }">
        <div class="card box-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="@/assets/img/vue_lans_en_vercors.jpg"
                alt="photo du labo"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="has-font-gabriola-sub" v-if="view === 'info-utiles'">
                Infos utiles
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
      <div class="about" :class="{ selectedCard: view === 'nous-contacter' }">
        <div class="card box-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="@/assets/img/contact_genesis.jpg" alt="photo du labo" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="has-font-gabriola-sub" v-if="view === 'nous-contacter'">
                Nous contacter
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
      <div class="about" :class="{ selectedCard: view === 'nos-praticiens' }">
        <div class="card box-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="@/assets/img/logo_forma.jpg" alt="photo du labo" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="has-font-gabriola-sub" v-if="view === 'nos-praticiens'">
                Tous nos praticiens
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
    <formulaire-contact v-if="view === 'nous-contacter'" />
    <infos-utiles v-if="view === 'info-utiles'" />
    <nos-praticiens v-if="view === 'nos-praticiens'" />
  </section>
</template>

<script>
import buttonAnime from "@/components/inAllComponents/button.vue";
import FormulaireContact from "@/components/public/AboutPage/FormulaireContact.vue";
import InfosUtiles from "@/components/public/AboutPage/InfosUtiles.vue";
import NosPraticiens from "@/components/public/AboutPage/NosPraticiens.vue";

export default {
  name: "AboutPage",
  props: ["view"],
  components: {
    buttonAnime,
    FormulaireContact,
    InfosUtiles,
    NosPraticiens,
  },
  data() {
    return {
      card1: [
        {
          id: 0,
          name: "Info utiles",
          router: {
            name: "about",
            params: { view: "info-utiles" },
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
      card3: [
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
