<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <router-view />
      </fade-transition>
    </main>
    <!-- <router-view name="footer"></router-view> -->
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions"

export default {
  //❌
  name: "app",
  components: {
    FadeTransition
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.circle-150-1 {
  width: 150px;
  height: 150px;
  top: 0;
  left: -4%;
  bottom: auto;
}
.circle-100-2 {
  width: 100px;
  height: 100px;
  top: 40%;
  left: 2%;
}
.circle-100-3 {
  width: 100px;
  height: 100px;
  top: 80%;
  left: 1.5%;
}
.circle-200-4 {
  width: 200px;
  height: 200px;
  top: 45%;
  left: 10%;
}
.circle-50-5 {
  width: 50px;
  height: 50px;
  top: 10%;
  left: 90%;
}
.circle-50-6 {
  width: 50px;
  height: 50px;
  top: 40%;
  left: 88%;
}
.circle-75-7 {
  width: 75px;
  height: 75px;
  top: 46%;
  left: 85%;
}
.circle-100-8 {
  width: 100px;
  height: 100px;
  top: 65%;
  left: 89%;
}
.circle-50-9 {
  width: 50px;
  height: 50px;
  top: 85%;
  left: 92%;
}

</style>
