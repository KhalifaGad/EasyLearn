<template>
  <nav id="appNav" class="navbar navbar-transparent navbar-expand-sm">
    <a class="navbar-brand" href="#">Easy Learn</a>
    <button class="login-btn navbar-right" @click="logout()" >Sign Out</button>

  </nav>
</template>
<script>
export default {
  data(){
    return {
      updateScroll: 'test'
    }
  },
  methods: {
    logout() {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap");

nav {
  margin-top: 0px;
}

.navbar-transparent {
  background: linear-gradient(90deg, #281483 15%, #8f6ed5 70%, #d782d9 94%) !important;
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
  margin-left: 65%;
}
.login-btn:focus{
  outline: none;
}

</style>