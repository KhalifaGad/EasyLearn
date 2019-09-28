<template>
  <main>
    <div class="tabs" id="tabs">
      <button @click="switchTap(0)">Info</button>
      <button @click="switchTap(1)">Homework</button>
      <button @click="switchTap(2)">HW History</button>
      <button @click="switchTap(3)">Competition</button>
      <button @click="switchTap(4)">C. History</button>
      <button @click="switchTap(5)">Quiz</button>
    </div>
    <div class="components-wrap">
      <keep-alive>
        <component :is="componentId" />
      </keep-alive>
    </div>
  </main>
</template>

<script>
import Homework from "../components/studentComponents/Homework";
import HWHistory from "../components/studentComponents/HWHistory";
import Competition from "../components/studentComponents/Competition";
import ComHistory from "../components/studentComponents/ComHistory";
import Info from "../components/studentComponents/Info";
import Quiz from "../components/studentComponents/Quiz";

export default {
  data() {
    return {
      componentsArr: [
        "Info",
        "Homework",
        "HWHistory",
        "Competition",
        "ComHistory",
        "Quiz"
      ],
      componentId: "Info"
    };
  },
  components: {
    Homework,
    HWHistory,
    Competition,
    ComHistory,
    Info,
    Quiz
  },
  methods: {
    switchTap(index) {
      let tabsDiv = document.getElementById("tabs");
      let tabs = tabsDiv.childNodes;
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.opacity = 0.2;
      }
      tabs[index].style.opacity = 1;
      this.componentId = this.componentsArr[index];
    }
  },
  mounted() {
    let tabsDiv = document.getElementById("tabs");
    tabsDiv.childNodes[0].style.opacity = 1;
  }
};
</script>

<style scoped>
main {
  background-color: rgb(243, 240, 240);
  width: 100%;
  padding-top: 2%;
  display: flex;
  flex-direction: column;
}
.tabs {
  display: flex;
  flex-direction: row;
  margin-left: 6%;
  width: 50%;
  box-shadow: 12px 0px 5px 0px rgba(209, 209, 209, 1);
}
.tabs button {
  float: left;
  background-color: #fff;
  opacity: 0.2;
  width: 25%;
  height: 6vh;
  color: black;
  border-width: 0;
}
.tabs button:focus {
  outline: none;
}
.tabs button + button {
  border-left: 1px solid rgb(226, 226, 226);
}
.components-wrap {
  width: 88%;
  height: 110vh;
  margin-left: 6%;
  background-color: #fff;
  margin-bottom: 10%;
  box-shadow: 10px 10px 5px 0px rgba(209, 209, 209, 1);
  padding-top: 4vh;
}
</style>