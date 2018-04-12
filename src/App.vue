<template>
  <div id="app">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <span class="md-title">GitHub Tracker</span>
      </md-app-toolbar>

      <md-app-content>
        <router-view id="routerView"/>
      </md-app-content>
    </md-app>
    <BottomBar id="bottomBar"/>
  </div>
</template>

<script>
import BottomBar from '@/components/BottomBar'

export default {
  name: 'app',
  components: {
    BottomBar
  },
  data () {
    return {
      menuVisible: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons');
</style>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#routerView {
  margin-bottom: 50px;
}
#bottomBar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
