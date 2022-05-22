<template>
  <navbar-public />
  <div class="public">
    <router-view />
  </div>
  <genesis-footer />
</template>

<script>
import GenesisFooter from "@/components/inAllComponents/Footer.vue";
import NavbarPublic from "@/components/public/NavbarPublic.vue";
export default {
  name: "LayoutPublic",
  components: {
    NavbarPublic,
    GenesisFooter,
  },
};
</script>

<style lang="scss" scoped>
.public {
  margin-top: 5.5rem;
}
</style>
