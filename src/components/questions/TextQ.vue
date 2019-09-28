<template>
  <main>
    <div class="question">
      <h3>{{ qHead }}</h3>
      <p>{{ qBody }}</p>
    </div>
    <div class="answers">
      <textarea placeholder="please provide your answer here..."></textarea>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    qHead: String,
    qBody: String
  },
  data() {
    return {
      answer: ""
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
.question {
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
.answers {
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding-right: 4vw;
  padding-left: 4vw;
}
.answers textarea {
  height: 100%;
  width: 100%;
}
</style>