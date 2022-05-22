<template>
  <div class="notification" :class="{ active: active }">
    <strong>{{ message }}</strong>
  </div>
</template>

<script>
export default {
  name: "ToastErreur",
  props: ["active", "message"],
};
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;
  top: 0;
  height: 1px;
}
.active {
  top: 4.5rem;
  height: auto;
  transition: all 0.8s ease-in;
  left: 0;
  right: 0;
}

.notification {
  background-color: rgb(248 39 39 / 90%);
  color: #000000;
}
</style>
