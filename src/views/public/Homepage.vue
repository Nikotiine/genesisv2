<template>
  <home-meta @next="next" />
  <home-labo @next="next" />
  <home-formations @next="next" />
  <home-about />
</template>

<script>
import HomeMeta from "@/components/public/HomePage/Homemeta.vue";
import HomeLabo from "@/components/public/HomePage/Homelabo.vue";
import HomeFormations from "@/components/public/HomePage/Homeformations.vue";
import HomeAbout from "@/components/public/HomePage/Homeabout.vue";

export default {
  name: "HomePage",
  components: {
    HomeMeta,
    HomeLabo,
    HomeFormations,
    HomeAbout,
  },
  methods: {
    next: function (id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
