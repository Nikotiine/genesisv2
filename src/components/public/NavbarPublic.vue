<template>
  <div>
    <nav
      class="navbar is-fixed-top box-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand" :class="{ 'is-active': showNav }">
        <a class="navbar-item hidden">
          <img src="" />
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="showNav = !showNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item" @click="closeNav"
            >Accueil</router-link
          >
          <router-link to="/methode" class="navbar-item" @click="closeNav"
            >Meta la methode</router-link
          >
          <div class="navbar-item has-dropdown is-hoverable">
            <router-link
              :to="{
                name: 'labo',
                params: { view: 'accueil' },
              }"
              class="navbar-item"
              @click="closeNav"
              >Le labo</router-link
            >

            <div class="navbar-dropdown">
              <router-link
                :to="{
                  name: 'labo',
                  params: { view: 'technique' },
                }"
                class="navbar-item"
                @click="closeNav"
                >La technique</router-link
              >

              <router-link
                :to="{
                  name: 'labo',
                  params: { view: 'explications' },
                }"
                class="navbar-item"
                @click="closeNav"
                >Un laboratoire associatif à but non lucratif :explications
                ?</router-link
              >
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <router-link
              :to="{
                name: 'formations',
                params: { view: 'accueil' },
              }"
              class="navbar-item"
              @click="closeNav"
              >Les formations</router-link
            >

            <div class="navbar-dropdown">
              <router-link
                :to="{
                  name: 'formations',
                  params: { view: 'ouvert-a-tous' },
                }"
                class="navbar-item"
                @click="closeNav"
                >Formation sans pre-requis
              </router-link>

              <router-link
                :to="{
                  name: 'formations',
                  params: { view: 'avec-pre-requis' },
                }"
                class="navbar-item"
                @click="closeNav"
                >Fromations pour les professionels de la santé
              </router-link>
              <router-link
                :to="{
                  name: 'formations',
                  params: { view: 'salle-de-formations' },
                }"
                class="navbar-item"
                @click="closeNav"
                >Le cairn : Salle de seminaire
              </router-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <router-link
              :to="{
                name: 'about',
                params: { view: 'accueil' },
              }"
              class="navbar-item"
              @click="closeNav"
            >
              Qui sommes nous ?</router-link
            >

            <div class="navbar-dropdown">
              <router-link
                :to="{
                  name: 'about',
                  params: { view: 'nous-contacter' },
                }"
                class="navbar-item"
                @click="closeNav"
              >
                Nous contacter</router-link
              >
              <router-link
                :to="{
                  name: 'about',
                  params: { view: 'nos-praticiens' },
                }"
                class="navbar-item"
                @click="closeNav"
              >
                trouver un praticien</router-link
              >
              <router-link
                :to="{
                  name: 'about',
                  params: { view: 'info-utiles' },
                }"
                class="navbar-item"
                @click="closeNav"
              >
                info utiles</router-link
              >
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link
                class="button is-info is-outlined"
                @click="closeNav"
                to="/"
              >
                <strong>Espace praticien</strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarPublic",
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    closeNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>

<style lang="scss" scoped></style>
