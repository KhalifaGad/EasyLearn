<template>
  <section id="schedule">
    <div class="section-header">
      <span>Schedule</span>
      <div class="line" />
    </div>
    <span class="circle circle-50-0"></span>
    <span class="circle circle-150-1"></span>
    <span class="circle circle-100-2"></span>
    <span class="circle circle-100-3"></span>
    <span class="circle circle-200-4"></span>
    <span class="circle circle-50-5"></span>
    <span class="circle circle-50-6"></span>
    <span class="circle circle-75-7"></span>
    <span class="circle circle-100-8"></span>
    <span class="circle circle-50-9"></span>
    <ul class="schedule">
      <li id="sunday">
        <ul id="sunday-ul">
          <li class="day" @click="showSunday()">
            <div class="day-container">
              Sunday
              <span style="padding-left: 30.5%" id="sundayArrow" class="fas fa-angle-down"></span>
            </div>
          </li>
          <transition-group tag="li" name="fliptop">
            <li v-for="(item) in sundayArr" v-show="sundayShowen" :key="item" class="day-schedule">
              {{item.center}}
              <ul>
                <li v-for="time in item.times" :key="time" class="time-span">{{time}}</li>
              </ul>
            </li>
          </transition-group>
        </ul>
      </li>
      <li id="monday">
        <ul id="monday-ul">
          <li @click="showMonday()" class="day">
            <div class="day-container">
              Monday
              <i class="fas fa-angle-down" id="mondayArrow" style="padding-left: 30%"></i>
            </div>
          </li>
          <transition-group name="fliptop" tag="li">
            <li
              v-for="item in mondayArr"
              v-show="mondayShowen"
              :key="item.center"
              class="day-schedule"
            >
              {{item.center}}
              <ul>
                <li v-for="time in item.times" :key="time" class="time-span">{{time}}</li>
              </ul>
            </li>
          </transition-group>
        </ul>
      </li>
      <li id="tuesday">
        <ul id="tuesday-ul">
          <li @click="showTuesday()" class="day">
            <div class="day-container">
              Tuesday
              <i class="fas fa-angle-down" id="tuesdayArrow" style="padding-left: 29%"></i>
            </div>
          </li>
          <transition-group name="fliptop" tag="li">
            <li
              v-for="item in tuesdayArr"
              v-show="tuesdayShowen"
              :key="item.center"
              class="day-schedule"
            >
              {{item.center}}
              <ul>
                <li v-for="time in item.times" :key="time" class="time-span">{{time}}</li>
              </ul>
            </li>
          </transition-group>
        </ul>
      </li>
      <li id="wednesday">
        <ul id="wednesday-ul">
          <li @click="showWednesday()" class="day">
            <div class="day-container">
              Wednesday
              <i class="fas fa-angle-down" id="wednesdayArrow" style="padding-left: 24%"></i>
            </div>
          </li>
          <transition-group name="fliptop" tag="li">
            <li
              v-for="item in wednesdayArr"
              v-show="wednesdayShowen"
              :key="item.center"
              class="day-schedule"
            >
              {{item.center}}
              <ul>
                <li v-for="time in item.times" :key="time" class="time-span">{{time}}</li>
              </ul>
            </li>
          </transition-group>
        </ul>
      </li>
      <li id="thursday">
        <ul id="thursday-ul">
          <li @click="showThursday()" class="day">
            <div class="day-container">
              Thursday
              <i class="fas fa-angle-down" id="thursdayArrow" style="padding-left: 27%"></i>
            </div>
          </li>
          <transition-group name="fliptop" tag="li">
            <li
              v-for="item in thursdayArr"
              v-show="thursdayShowen"
              :key="item.center"
              class="day-schedule"
            >
              {{item.center}}
              <ul>
                <li v-for="time in item.times" :key="time" class="time-span">{{time}}</li>
              </ul>
            </li>
          </transition-group>
        </ul>
      </li>
      <li id="friday">
        <ul id="friday-ul">
          <li @click="showFriday()" class="day">
            <div class="day-container">
              Friday
              <i class="fas fa-angle-down" id="fridayArrow" style="padding-left: 32%"></i>
            </div>
          </li>
          <transition-group name="fliptop" tag="li">
            <li
              v-for="item in fridayArr"
              v-show="fridayShowen"
              :key="item.center"
              class="day-schedule"
            >
              {{item.center}}
              <ul>
                <li v-for="time in item.times" :key="time" class="time-span">{{time}}</li>
              </ul>
            </li>
          </transition-group>
        </ul>
      </li>
      <li id="saturday">
        <ul id="saturday-ul">
          <li @click="showSaturday()" class="day">
            <div class="day-container">
              Saturday
              <i class="fas fa-angle-down" id="saturdayArrow" style="padding-left: 27%"></i>
            </div>
          </li>
          <transition-group name="fliptop" tag="li">
            <li
              v-for="item in saturdayArr"
              v-show="saturdayShowen"
              :key="item.center"
              class="day-schedule"
            >
              {{item.center}}
              <ul>
                <li v-for="time in item.times" :key="time" class="time-span">{{time}}</li>
              </ul>
            </li>
          </transition-group>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sundayArr: [
        { center: "Aby-zar", times: ["2PM : 4PM", "4PM : 6PM"] },
        { center: "Fayrouz", times: ["6.30PM : 8.30PM"] },
        { center: "El-Rahma", times: ["12PM : 2PM"] }
      ],
      sundayShowen: false,
      mondayArr: [{ center: "Aby zar", times: ["2PM : 5PM"] }],
      mondayShowen: false,
      tuesdayArr: [{ center: "EL Gazar", times: ["2PM : 6PM"] }],
      tuesdayShowen: false,
      wednesdayArr: [{ center: "Aby zar", times: ["2PM : 5PM"] }],
      wednesdayShowen: false,
      thursdayArr: [{ center: "Aby zar", times: ["2PM : 5PM"] }],
      thursdayShowen: false,
      fridayArr: [{ center: "Aby zar", times: ["2PM : 5PM"] }],
      fridayShowen: false,
      saturdayArr: [{ center: "Aby zar", times: ["2PM : 5PM"] }],
      saturdayShowen: false,
      index: 0
    };
  },
  methods: {
    showSunday: function() {
      let arrow = document.getElementById("sundayArrow");
      if (this.sundayShowen) {
        this.elementDown(arrow);
      } else {
        this.elementUp(arrow);
      }
      this.sundayShowen = !this.sundayShowen;
    },
    showMonday: function() {
      let arrow = document.getElementById("mondayArrow");
      if (this.mondayShowen) {
        this.elementDown(arrow);
      } else {
        this.elementUp(arrow);
      }
      this.mondayShowen = !this.mondayShowen;
    },
    showTuesday: function() {
      let arrow = document.getElementById("tuesdayArrow");
      if (this.tuesdayShowen) {
        this.elementDown(arrow);
      } else {
        this.elementUp(arrow);
      }
      this.tuesdayShowen = !this.tuesdayShowen;
    },
    showWednesday: function() {
      let arrow = document.getElementById("wednesdayArrow");
      if (this.wednesdayShowen) {
        this.elementDown(arrow);
      } else {
        this.elementUp(arrow);
      }
      this.wednesdayShowen = !this.wednesdayShowen;
    },
    showThursday: function() {
      let arrow = document.getElementById("thursdayArrow");
      if (this.thursdayShowen) {
        this.elementDown(arrow);
      } else {
        this.elementUp(arrow);
      }
      this.thursdayShowen = !this.thursdayShowen;
    },
    showFriday: function() {
      let arrow = document.getElementById("fridayArrow");
      if (this.fridayShowen) {
        this.elementDown(arrow);
      } else {
        this.elementUp(arrow);
      }
      this.fridayShowen = !this.fridayShowen;
    },
    showSaturday: function() {
      let arrow = document.getElementById("saturdayArrow");
      if (this.saturdayShowen) {
        this.elementDown(arrow);
      } else {
        this.elementUp(arrow);
      }
      this.saturdayShowen = !this.saturdayShowen;
    },
    elementUp(element) {
      element.classList.add("rotate-up");
      element.classList.remove("rotate-down");
    },
    elementDown(element) {
      element.classList.add("rotate-down");
      element.classList.remove("rotate-up");
    }
  }
};
</script>

<style scoped>
.rotate-up {
  animation: rotateUp 0.5s linear;
  animation-fill-mode: forwards;
  /* padding-left: 30%; */
}
.rotate-down {
  animation: rotateDown 0.5s linear;
  animation-fill-mode: forwards;
  /* padding-left: 30%; */
}
@keyframes rotateUp {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(180deg);
  }
}
@keyframes rotateDown {
  from {
    transform: rotateX(180deg);
  }
  to {
    transform: rotateX(0deg);
  }
}
.section-header {
  display: flex;
  flex-direction: row;
  padding-left: 8%;
  margin-top: 5%;
  width: 100%;
  align-items: center;
  font-size: 1.5em;
  font-weight: bold;
  color: rgb(145, 140, 140);
}
.line {
  width: 81%;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(145, 140, 140);
  border-radius: 50%;
  margin-left: 2%;
}
.day-container {
  display: flex;
  flex-direction: row;
  padding-left: 35%;
  width: 100%;
  align-items: baseline;
}
.fliptop-enter, .fliptop-leave {
}
.fliptop-enter-active {
  animation: flip-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.fliptop-leave-active {
  animation: flip-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse;
}


@keyframes flip-top {
  0% {
    -webkit-transform: rotateX(-80deg);
    transform: rotateX(-80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 1;
  }
}
section {
  position: relative;
  /* height: 100vh; */
  min-height: 500px;
  width: 100%;
  background: #fff;
  /* margin-top: -10vh; */
}
.schedule {
  list-style-type: none;
  margin-top: 10%;
  width: 80%;
  margin-left: 7.5%;
}
#sunday-ul,
#monday-ul,
#tuesday-ul,
#wednesday-ul,
#thursday-ul,
#friday-ul,
#saturday-ul {
  list-style-type: none;
}

.day {
  height: 80px;
  padding-top: 25px;
  color: #fff;
  font-weight: bold;
  font-size: 1.3em;
  background: linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%);
}

.day-schedule {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  height: 80px;
  padding-top: 25px;
  color: rgb(126, 122, 122);
  font-weight: bold;
  font-size: 1.4em;
  background-color: #fff;
  border-width: 2px;
  border-color: rgb(126, 122, 122);
  border-style: solid;
  padding-left: 2%;
}

.time-span {
  color: #fff;
  margin-left: 2%;
  font-size: 1.1em;
  /* font-weight: bold; */
  background: linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%);
  display: inline;
  zoom: 1;
  padding: 1%;
}
.day-schedule ul {
  width: 80%;
}
.circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%);
  opacity: 0.08;
}

.circle-50-0 {
  width: 50px;
  height: 50px;
  top: -1%;
  left: 7.6%;
  bottom: auto;
}
</style>