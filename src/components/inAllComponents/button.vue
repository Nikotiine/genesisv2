<template>
  <!--<main>-->
  <div class="block" :style="cssprops">
    <svg
      height="60"
      :style="{ width: width + 'px' }"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        class="block__element"
        height="60"
        :style="{ width: width + 'px' }"
      />
    </svg>
    <router-link
      class="block__element--modifier"
      v-for="bouton in btnName"
      :key="bouton.id"
      :to="bouton.router"
    >
      {{ bouton.name }}
    </router-link>
  </div>

  <!-- </main> -->
</template>

<script>
export default {
  name: "buttonAnime",
  props: ["btnName", "width"],
  data() {},
  computed: {
    cssprops() {
      return {
        "--width": this.btnName[0].width,
        "--strokeDashoffset": this.btnName[0].strokeDashoffset,
        "--strokeDasharray1": this.btnName[0].strokeDasharray1,
        "--strokeDasharray2": this.btnName[0].strokeDasharray2,
        "--dashHover": this.btnName[0].dashHover,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$neonblue: rgb(123, 185, 248);
@mixin dash($array, $offset, $width) {
  stroke-dasharray: $array;
  stroke-dashoffset: $offset;
  stroke-width: $width;
}
.block {
  padding-top: 20px;
  position: relative;
  margin: 0 auto;
  width: var(--width);

  &:hover &__element {
    @include dash(var(--dashHover), 0, 4px);
  }

  &__element {
    fill: transparent;
    stroke: $neonblue;
    border-bottom: 5px solid $neonblue;

    transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
    @include dash(
      var(--strokeDasharray1) var(--strokeDasharray2),
      var(--strokeDashoffset),
      10px
    );

    &--modifier {
      position: relative;
      text-align: center;
      font-size: 1.8rem;
      line-height: 32px;
      letter-spacing: 6px;
      color: black;
      top: -48px;
    }
  }
}
</style>
