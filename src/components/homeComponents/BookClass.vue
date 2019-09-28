<template>
  <section class="booking">
    <div class="booking-header">
      <span>Book A Class</span>
      <div class="line"></div>
    </div>
    <div class="booking-body">
      <div class="previous">
        <button class="fas fa-angle-left" @click="previous()" :disabled="step === 1"></button>
      </div>
      <div class="booking-details">
        <transition
          name="fade"
          :enter-active-class="enterTransition"
          :leave-active-class="leaveTransition"
          mode="out-in"
        >
          <div class="name-container" style="animation-duration: .6s" v-if="step === 1" key="1">
            <div class="name">
              <span class="name-header">Please Enter your name</span>
              <div class="name-txtfld">
                <input
                  id="nameTxtFld"
                  type="text"
                  placeholder="eg: john alex"
                  v-model="studentName"
                />
              </div>
              <button class="next-btn" @click="next()">Next</button>
            </div>
          </div>
          <div class="phone-container" style="animation-duration: .6s" v-if="step === 2" key="2">
            <div class="phone">
              <span class="phone-header">Please enter your phone</span>
              <div class="phone-txtfld">
                <input
                  id="phoneTxtFld"
                  type="text"
                  placeholder="eg: 010xxxxxxx"
                  v-model="studentPhone"
                />
              </div>
              <button class="next-btn" @click="next()">Next</button>
            </div>
          </div>
          <div class="education-container" style="animation-duration: .6s" v-if="step === 3" key="3">
            <div class="education">
              <span class="education-header">Your education level</span>
              <div class="education-txtfld">
                <input
                  id="educationTxtFld"
                  type="text"
                  placeholder="eg: secondary two"
                  v-model="educationLevel"
                />
              </div>
              <button class="next-btn" @click="next()"> Book </button>
            </div>
          </div>
        </transition>
      </div>
      <div class="next">
        <button class="fas fa-angle-right" @click="next()" :disabled="step == 3"></button>
      </div>
    </div>
  </section>
</template>

<script>
require("vue2-animate/dist/vue2-animate.min.css");
export default {
  data() {
    return {
      step: 1,
      enterTransition: "",
      leaveTransition: "",
      studentName: "",
      studentPhone: "",
      educationLevel: ''
    };
  },
  methods: {
    next() {
      this.enterTransition = "fadeInLeft";
      this.leaveTransition = "fadeOutRight";
      if (this.step === 1) {
        if (this.studentName === "") {
          document.getElementById("nameTxtFld").classList.add("invalid");
          return;
        } else {
          document.getElementById("nameTxtFld").classList.remove("invalid");
        }
      } else if (this.step === 2) {
        if (this.studentPhone === "") {
          document.getElementById("phoneTxtFld").classList.add("invalid");
          return;
        } else {
          document.getElementById("phoneTxtFld").classList.remove("invalid");
        }
      } else {
            if (this.educationLevel === "") {
              document.getElementById("educationTxtFld").classList.add("invalid");
              return;
            } else {
              document.getElementById("educationTxtFld").classList.remove("invalid");
              return;
            }
      }
      this.step++;
    },
    previous() {
      this.enterTransition = "fadeInRight";
      this.leaveTransition = "fadeOutLeft";
      this.step--;
    }
  }
};
</script>

<style scoped>
.invalid {
  border-color: red;
}
.education-container,
.phone-container,
.name-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.education,
.phone,
.name {
  position: relative;
  border-color: rgb(145, 140, 140);
  border-radius: 10px;
  border-style: solid;
  border-width: 4px;
  height: 25vh;
  width: 70%;
}
.education-header,
.phone-header,
.name-header {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 2%;
  margin-top: -2%;
  z-index: 999;
  background-color: #fff;
  width: 30%;
  font-weight: bold;
  color: rgb(145, 140, 140);
}
.education-txtfld,
.phone-txtfld,
.name-txtfld {
  margin-top: 8vh;
}
.education-txtfld > input,
.phone-txtfld > input,
.name-txtfld > input {
  height: 6vh;
  padding-left: 2%;
  width: 50%;
  font-weight: bold;
}
.education-txtfld > input::placeholder,
.phone-txtfld > input::placeholder,
.name-txtfld > input::placeholder {
  font-weight: bold;
}
.next-btn {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 4%;
  margin-bottom: 2%;
  width: 12%;
  background: linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%);
  border-width: 0;
  color: #fff;
  font-weight: bold;
  height: 5vh;
}
.booking {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 8%;
}

.booking-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 5%;
  width: 100%;
  align-items: center;
  font-size: 1.5em;
  font-weight: bold;
  color: rgb(145, 140, 140);
}

.line {
  width: 79%;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(145, 140, 140);
  border-radius: 50%;
  margin-left: 2%;
}
.booking-body {
  display: flex;
  flex-direction: row;
  height: 30vh;
  margin-top: 10%;
}
.previous,
.next {
  display: flex;
  align-items: center;
  height: 100%;
  width: 10%;
}
.previous > button,
.next > button {
  color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%);
  font-size: 2em;
  padding-top: 0%;
  z-index: 999;
  border-width: 0px;
}
.previous > button:hover,
.next > button:hover {
  background: linear-gradient(150deg, #92d6e7 15%, #aa97d3 70%, #dcb0dd 94%);
  transform: background 0.5s linear;
}
.previous > button:disabled,
.next > button:disabled {
  background: linear-gradient(150deg, #a0a1a1 15%, #b7b6b9 70%, #c0bec0 94%);
  transform: background 0.5s linear;
}
.previous > button:focus,
.next > button:focus {
  outline: none;
}

.booking-details {
  width: 80%;
  height: 100%;
}
</style>