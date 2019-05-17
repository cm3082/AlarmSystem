<template lang="pug">
  .navMenu
    .header
      .logo(v-show='!isCollapse')
        img(src="../assets/png/logo.png")
      .mune(@click="menu")
        img(src="../assets/png/header_menu.png")
      div
    .nemu-and-page
      el-menu.el-menu-vertical-demo(
      @select='select',
      :collapse='isCollapse',
      :collapse-transition="collapseTransition")
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
  export default {
    name: "NavMenu",
    data() {
      return {
        isCollapse: false,
        collapseTransition: true,
        pages: [
          {enName: 'DataVisualization', zhName: '数据可视'},
          {enName: 'SystemAccess', zhName: '系统接入'},
          {enName: 'TacticalManagement', zhName: '策略管理'},
          {enName: 'AlarmManagement', zhName: '告警管理'},
          {enName: 'OperationLog', zhName: '操作日志'},
        ]
      };
    },
    methods: {
      menu() {
        this.isCollapse = !this.isCollapse;
      },
      select(index, indexPath) {
        this.$store.commit('changeTitle', this.pages[index].zhName)
        this.$router.push({name: this.pages[index].enName})
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
  }

  .nemu-and-page {
    display: flex;
    flex-direction: row;
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
        bottom: 1rem;
        right: calc(50% - 7rem);
      }
    }
  }


</style>
