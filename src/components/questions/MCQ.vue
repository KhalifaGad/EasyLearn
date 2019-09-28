<template>
  <main>
    <div class="question">
      <h3>{{ qHead }}</h3>
      <p>{{ qBody }}</p>
    </div>
    <div class="answers">
      <div v-for="(choice, index) in choices" :key="index">
        <input type="radio" name="answer" :value="choice" :checked="choosedAnswer = choice" />
        <span>{{ choice }}</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    qHead: String,
    qBody: String,
    choices: Array
  },
  data() {
    return {
      choosedAnswer: ""
    };
  }
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  padding-top: 5vh;
}
.question{
    display: flex;
    flex-direction: column; 
    width: 100%;
    padding-right: 2vw;
}
.question p {
    margin-top: 2vh;
}
.answers {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

}
.answers div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
}
.answers div > input {
    margin-left: 2vw;
}
.answers div > span {
    flex-grow: 8;
}
.answers div + div {
    margin-top: 1vh;
}

</style>