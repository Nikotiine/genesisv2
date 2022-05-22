<template>
  <navbar-public />
  <div class="public">
    <router-view />
  </div>
</template>

<script>
import NavbarPublic from "@/components/public/NavbarPublic.vue";
export default {
  name: "LayoutPublic",
  components: {
    NavbarPublic,
  },
};
</script>

<style lang="scss" scoped>
.public {
  margin-top: 5.5rem;
}
</style>
