<template lang="pug">
  .navMenu
    .header
      div(style="display: flex;")
        .logo(v-show='!isCollapse')
          img(src="../assets/png/logo.png")
        .mune(@click="foldMenu")
          img(src="../assets/png/header_menu.png")
      .person-div
        el-dropdown(@command="handleCommand")
          span.el-dropdown-link
            i.el-icon-user(style="font-size:4rem")
            | 陈晓艳
            i.el-icon-arrow-down.el-icon--right
          el-dropdown-menu(slot='dropdown')
            el-dropdown-item(command="5") 平台管理
            el-dropdown-item(command="6") 退出登录
    .nemu-and-page
      el-menu.el-menu-vertical-demo(
      @select='selectMenu',
      :collapse='isCollapse',
      :collapse-transition="false")
        el-menu-item(index='0')
          i.el-icon-data-analysis
          span(slot='title') 数据可视
        el-menu-item(index='1')
          i.el-icon-monitor
          span(slot='title') 系统接入
        el-menu-item(index='2')
          i.el-icon-edit-outline
          span(slot='title') 策略管理
        el-menu-item(index='3')
          i.el-icon-lightning
          span(slot='title') 告警管理
        el-menu-item(index='4')
          i.el-icon-notebook-1
          span(slot='title') 操作日志
      .main
        router-view
        .footer 2019 © 深圳国家基因库 版权所有
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "NavMenu",
    data() {
      return {
        isCollapse: false,
      };
    },
    computed: {
      ...mapState(["view"]),
    },
    created() {

    },
    methods: {
      foldMenu() {
        this.isCollapse = !this.isCollapse;
      },
      selectMenu(index, indexPath) {
        this.$store.commit('navmemuIndex', index)
        this.$store.commit('categoryIndex', 0)
        this.$router.push({name: this.view.pages[index].enName})
      },
      handleCommand(command) {
        this.$store.commit('navmemuIndex', command)
        this.$store.commit('categoryIndex', 0)
        this.$router.push({name: this.view.pages[command].enName})
      }
    }
  }
</script>

<style lang="scss">
  .navMenu {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--blue_green);
    width: 100%;
    height: 6rem;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--dark_green);
      width: 16rem;
      height: 6rem;
    }
    .mune {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 6rem;
      height: 6rem;
      border-right: solid 1px var(--dark_green);
      cursor: pointer;
    }
    .person-div {
      padding-right: 2rem;
      .el-dropdown-link {
        cursor: pointer;
        color: var(--white);
      }
    }
  }

  .nemu-and-page {
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      min-width: 16rem;
      min-height: 80vh;
    }
    .el-menu--collapse {
      min-width: 6rem;
      min-height: 80vh;

    }

    .main {
      flex: 1;
      padding: 2rem;
      background-color: var(--grey);
      font-size: 1.4rem;
      min-height: 80vh;
      position: relative;
      .footer {
        background-color: var(--grey);
        color: var(--dark_grey);
        position: absolute;
        bottom: 0.35rem;
        right: calc(50% - 7rem);
      }
    }
  }


</style>
