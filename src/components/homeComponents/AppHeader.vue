<template>
  <nav id="appNav" class="navbar fixed-top navbar-transparent navbar-expand-sm">
    <a class="navbar-brand" href="#">Easy Learn</a>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active"> 
        <a class="nav-link" href="#" v-scroll-to="'#winners'"> Winners </a>
      </li>
      <li class="nav-item active"> 
        <a class="nav-link" href="#" v-scroll-to="'#excellents'"> Outstanding </a>
      </li>
      <li class="nav-item active"> 
        <a class="nav-link" href="#" v-scroll-to="'#schedule'"> Schedule </a>
      </li>
      <li class="nav-item"> 
        <a class="nav-link" href="#" v-scroll-to="'#book'"> Book</a>
      </li>
    </ul>
  
    <button class="login-btn navbar-right" @click="login()" >Login</button>

  </nav>
</template>
<script>
import { eventBus } from '../../main'
export default {
  data(){
    return {
      updateScroll: 'test'
    }
  },
  methods: {
    login() {
      eventBus.openLoginModal(true)
    }
  },
  mounted(){
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 477){
        document.getElementById('appNav').classList.add('scrolled')
      } else {
        document.getElementById('appNav').classList.remove('scrolled')
      }
    });
  }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap");

nav {
  /* margin-top: 1%; */
}
ul li a{
  color: #fff;
  font-size: 1.2em;
}
.scrolled {
  background: linear-gradient(90deg, #281483 15%, #8f6ed5 70%, #d782d9 94%) !important;
  transition: background 5s linear;
}
.navbar-transparent {
  background-color: transparent;
}
.navbar-brand {
  font-family: "Major Mono Display", monospace;
  color: #fff;
  font-size: 22px;
  margin-left: 6%;
}
.login-btn {
  background-color: transparent;
  border: none;
  color: #fff;
  margin-right: 6%;
  font-size: 1.2em;
}
.login-btn:focus{
  outline: none;
}

</style>