<template>
  <HeaderVue/>
  <!-- Contéudo -->
  <div id="Corpo">
    <Home/>
    <Api/>
    <Conteúdo/>
    <Portfolio/>
  </div>
  <MyFooterVue/>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderVue from './components/Principal/MyHeader.vue';
import MyFooterVue from './components/Principal/MyFooter.vue';
import Api from './components/Contéudo/MyApi.vue'
import Conteúdo from './components/Contéudo/MyConteúdo.vue'
import Home from './components/Contéudo/MyHome.vue'
import Portfolio from './components/Contéudo/MyPortfolio.vue'
export default defineComponent({
  name: 'App',
  components:{
    HeaderVue,
    MyFooterVue,
    Api,
    Conteúdo,
    Home,
    Portfolio,
  }
})
</script>
