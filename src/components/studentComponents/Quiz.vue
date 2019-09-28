<template>
  <div>
    <div v-if="!isStarted" class="quiz-start">
      <h3>By clicking start you will begin a timed questions</h3>
      <h3>Please be ready 🚀.</h3>
      <button @click="startQuiz()">Start</button>
    </div>
    <div v-else class="container">
      <div class="questions-number">
        <div class="test">
          <p>Question {{ qIndex + 1}} of {{ questions.length }}</p>
        </div>
        <div class="timer">
          <span v-if="minutes < 10">0</span>
          <span>{{ minutes }} :</span>
          <span v-if="seconds < 10">0</span>
          <span>{{ seconds }}</span>
        </div>
      </div>
      <div v-for="(question, index) in questions" :key="index">
        <MCQ
          v-if="question.qType === 'mcq'"
          v-show="index === qIndex"
          :qHead="question.qHead"
          :qBody="question.qBody"
          :choices="question.choices"
        />
        <TextQ
          v-else
          v-show="index === qIndex"
          :qHead="question.qHead"
          :qBody="question.qBody"
          :choices="question.choices"
        />
      </div>
      <div class="nav-btns">
        <button class="next-btn" @click="next()" v-show="qIndex < (questions.length - 1)">next</button>
        <button class="next-btn" @click="next()" v-show="qIndex == (questions.length - 1)">submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import MCQ from "../questions/MCQ";
import TextQ from "../questions/TextQ";
export default {
  components: {
    MCQ,
    TextQ
  },
  data() {
    return {
      timeInSec: 120,
      minutes: 0,
      minutesIntervalId: "",
      secondsIntervalId: "",
      seconds: 0,
      isStarted: false,
      qIndex: 0,
      questions: [
        {
          qHead: "هل هذا السؤال الاول؟",
          qBody: "من فضلك اختر الاجابه الادق من الاجابات الصحيحه",
          qType: "mcq",
          choices: ["اجابه صحيحه", "اجابه اصح", "اجابه دقيقه", "اجابه ادق"]
        },
        {
          qHead: "Is this second question?",
          qBody: "Please choose the most right answer",
          qType: "mcq",
          choices: ["Yes", "No", "Maybe yes", "But sometimes No"]
        },
        {
          qHead: "Is this third question?",
          qBody: "Please choose the most right answer",
          qType: "mcq",
          choices: ["Yes", "No", "Maybe yes", "But sometimes No"]
        },
        {
          qHead: "Why this is the fourth question?",
          qBody: "Please explain your answer below",
          qType: "txt"
        },
        {
          qHead: "Why this is the fifth question?",
          qBody: "Please explain your answer below",
          qType: "txt"
        },
        {
          qHead: "Is this sixth question?",
          qBody: "Please choose the most right answer",
          qType: "mcq",
          choices: ["Yes", "No", "Maybe yes", "But sometimes No"]
        }
      ]
    };
  },
  methods: {
    startSeconds() {
      this.secondsIntervalId = setInterval(() => {
        if (this.timeInSec > 0) {
          if (this.seconds > 0) {
            this.seconds--;
            this.timeInSec--;
          } else {
            this.seconds = 59;
          }
        } else {
          this.seconds = 0;
          clearInterval(this.secondsIntervalId)
        }
      }, 1000);
    },
    startMinutes() {
      this.minutesIntervalId = setInterval(() => {
        if (this.minutes > 0) {
          this.minutes = Math.ceil(this.timeInSec / 60) - 1;
        } else {
            clearInterval(this.minutesIntervalId)
        }
      }, 60 * 1000);
    },
    initCounter() {
      this.timeInSec = 120
      this.minutes = Math.ceil(this.timeInSec / 60);
      this.seconds = 59;
    },
    next(){
        clearInterval(this.minutesIntervalId)
        clearInterval(this.secondsIntervalId)
        this.initCounter()
        this.startMinutes()
        this.startSeconds()
        this.qIndex ++
    },
    startQuiz(){
        this.isStarted = true;
        this.initCounter()
        this.startMinutes()
        this.startSeconds()
    }
  }
};
</script>

<style scoped>
.quiz-start {
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.quiz-start > h3 {
  font-weight: bold;
  color: rgb(109, 105, 105);
}
.quiz-start > button {
  margin-top: 5vh;
  width: 15vw;
  color: #fff;
  height: 10vh;
  outline: none;
  border-width: 0;
  background: linear-gradient(
    150deg,
    #281483 15%,
    #8f6ed5 70%,
    #d782d9 94%
  ) !important;
  font-size: 2em;
  box-shadow: 10px 10px 5px 0px rgba(209, 209, 209, 1);
}
.container {
  display: flex;
  flex-direction: column;
}
.questions-number {
  width: 100%;
  font-size: 1.8em;
  padding-left: 2%;
  padding-right: 4%;
  margin-top: 2vh;
  color: rgb(96, 96, 238);
}
.questions-number > .test {
  width: 25%;
  float: left;
  margin-top: 2.5vh;
}
.timer {
  color: rgb(96, 96, 238);
  float: right;
  font-weight: bold;
  font-size: 1.6em;
}
.nav-btns {
  margin-top: 12vh;
  margin-bottom: 2vh;
}
.next-btn {
  width: 8vw;
  color: #fff;
  height: 8vh;
  outline: none;
  font-size: 1.2em;
  border-width: 0;
  background: linear-gradient(
    150deg,
    #281483 15%,
    #8f6ed5 70%,
    #d782d9 94%
  ) !important;
  transition: background 0.4s;
}
.prev-btn:disabled,
.next-btn:disabled {
  background: rgb(185, 185, 185) !important;
  transition: background 0.4s;
}
</style>