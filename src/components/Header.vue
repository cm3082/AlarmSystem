<template lang="pug">
  .navMenu
    .header
      .logo
        img(src="../assets/png/logo.png")
      .mune(@click="menu")
        img(src="../assets/png/header_menu.png")
      div

</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        isCollapse: true
      }
    },
    methods: {
      menu() {
        this.isCollapse = !this.isCollapse;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    background-color: var(--blue_green);
    width: 100%;
    height: 60px;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--dark_green);
      width: 200px;
      height: 60px;
    }
    .mune {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      border-right: solid 1px var(--dark_green);
      cursor: pointer;
    }
  }
</style>
