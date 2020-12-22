<template>
  <div id="app">
    <rf-navbar-comp :navbar="navbar"></rf-navbar-comp>
    <b-container fluid>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RfNavbarComp from '@/components/RfNavbarComp.vue';
import Navbar from '@/models/navbar';
import navigationService from '@/services/navigationService';

@Component({
  components: {
    RfNavbarComp,
  },
})
export default class App extends Vue {
  private navbar: Navbar = navigationService.getNavbar();
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
