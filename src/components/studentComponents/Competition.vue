<template>
  <div class="container">
    <div class="questions-number">
      <p>Question {{ qIndex + 1}} of {{ questions.length }}</p>
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
      <button class="prev-btn" @click="qIndex--" :disabled="qIndex == 0">previous</button>
      <button class="next-btn" @click="qIndex++" :disabled="qIndex == (questions.length - 1)">next</button>
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
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.questions-number {
  width: 100%;
  align-self: flex-start;
  text-align: left;
  font-size: 1.8em;
  padding-left: 2%;
  margin-top: 2vh;
  color: rgb(96, 96, 238);
}
.nav-btns {
  margin-top: 12vh;
  margin-bottom: 2vh;
}
.prev-btn {
  float: left;
  margin-left: 4vw;
  width: 6vw;
  color: #fff;
  height: 6vh;
  background: linear-gradient(
    150deg,
    #281483 15%,
    #8f6ed5 70%,
    #d782d9 94%
  ) !important;
  outline: none;
  border-width: 0;
}
.next-btn {
  float: right;
  margin-right: 4vw;
  width: 6vw;
  color: #fff;
  height: 6vh;
  outline: none;
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