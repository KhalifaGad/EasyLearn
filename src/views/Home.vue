<template>
  <div>
    <LoginModal v-if="openLogin"/>
    <section class="section1">
      <h1 class="h">Mr.Muhammed Ashraf</h1>
      <h4 class="h-sub">"physcis specialist teacher"</h4>
      <span class="oval"></span>
      <span class="circle circle-150-1"></span>
      <span class="circle circle-100-2"></span>
      <span class="circle circle-100-3"></span>
      <span class="circle circle-200-4"></span>
      <span class="circle circle-50-5"></span>
      <span class="circle circle-50-6"></span>
      <span class="circle circle-75-7"></span>
      <span class="circle circle-100-8"></span>
      <span class="circle circle-50-9"></span>
    </section>
    <section class="winners-section" id="winners">
      <winners />
      <span class="circle circle-50-wi"></span>
      <span class="circle circle-150-1"></span>
      <span class="circle circle-100-2"></span>
      <span class="circle circle-100-3"></span>
      <span class="circle circle-200-4"></span>
      <span class="circle circle-50-5"></span>
      <span class="circle circle-50-6"></span>
      <span class="circle circle-75-7"></span>
      <span class="circle circle-100-8"></span>
      <span class="circle circle-50-9"></span>
    </section>
    <section class="winners-section" id="excellents">
      <excellent-students />
      <span class="circle circle-50-wi"></span>
      <span class="circle circle-150-1"></span>
      <span class="circle circle-100-2"></span>
      <span class="circle circle-100-3"></span>
      <span class="circle circle-200-4"></span>
      <span class="circle circle-50-5"></span>
      <span class="circle circle-50-6"></span>
      <span class="circle circle-75-7"></span>
      <span class="circle circle-100-8"></span>
      <span class="circle circle-50-9"></span>
    </section>
    <Schedule id="schedule" />
    <section id="book" class="booking-section">
      <book-class></book-class>
      <span class="circle circle-150-1"></span>
      <span class="circle circle-100-2"></span>
      <span class="circle circle-100-3"></span>
      <span class="circle circle-200-4"></span>
      <span class="circle circle-50-5"></span>
      <span class="circle circle-50-6"></span>
      <span class="circle circle-75-7"></span>
      <span class="circle circle-100-8"></span>
      <span class="circle circle-50-9"></span>
    </section>
  </div>
</template>

<script>
import Schedule from "../components/homeComponents/Schedule"
import BookClass from "../components/homeComponents/BookClass"
import Winners from "../components/homeComponents/Winners"
import ExcellentStudents from "../components/homeComponents/ExcellentStudents"
import LoginModal from "../components/homeComponents/loginModal"
import { eventBus } from '../main'

export default {
  components: {
    Schedule,
    BookClass,
    Winners,
    ExcellentStudents,
    LoginModal
  },
  data() {
    return {
      openLogin: false
    }
  },
  created(){
    eventBus.$on('isLoggingIn',(flag)=> {
      this.openLogin = flag
    })
  }
};
</script>

<style scoped>
.section1 {
  position: relative;
  height: 110vh;
  min-height: 500px;
  width: 100%;
  background: linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%);
  margin-top: -10vh;
}

.booking-section,
.winners-section {
  position: relative;
  min-height: 500px;
  width: 100%;
  background: #fff;
}
.h {
  position: relative;
  color: #fff;
  top: 250px;
  font-weight: bold;
  font-family: "Major Mono Display", monospace;
}
.h-sub {
  position: relative;
  color: #fff;
  top: 260px;
  font-weight: bold;
  font-family: "Major Mono Display", monospace;
  font-size: 1.2em;
}

.section1 > .circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.winners-section > .circle,
.booking-section > .circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%);
  opacity: 0.08;
}
.circle-50-wi {
  width: 50px;
  height: 50px;
  top: 10%;
  left: 7.6%;
  bottom: auto;
}
.oval {
  position: absolute;
  border-radius: 40%;
  background: rgba(255, 255, 255, 0.1);
  width: 100px;
  height: 50px;
  top: 2%;
  left: 12.5%;
  bottom: auto;
}
</style>