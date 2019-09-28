<template>
    <section class="winners">
        <div class="winners-header">
            Winners
            <div class="line"></div>
        </div>
        <div class="competition-header">
            <span>#Competition Identifier</span>
            <div class="sub-line"></div>
        </div>
        <div class="winners-body">
            <div class="student-container">
                <img src="../../assets/abdelaty.jpeg" alt="abdel3aty">
                <span> Abdallah Abdelaty </span>
            </div>
            <div class="student-container">
                <img src="../../assets/khalifa.jpg" alt="abdel3aty">
                <span> Khalifa Gad </span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.winners {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 8%;
}
.winners-header {
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
  width: 80%;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(145, 140, 140);
  border-radius: 50%;
  margin-left: 2.5%;
}
.winners-body{
    display: flex;
    flex-wrap: wrap;
}
.student-container{
    display: flex;
    flex-direction: column;
    height: 40vh;
    width: 20vw;
    border-width: 3px;
    border-style: solid;
    margin-top: 5vh;
    border-radius: 5%;
    overflow: hidden;
}
.student-container + .student-container {
    margin-left: 5vw;
}
.student-container > img {
    width: 100%;
    height: 80%;
}
.student-container > span {
    width: 100%;
    height: 20%;
    color: #fff;
    font-weight: bold;
    padding-top: 5%;
    background: linear-gradient(90deg, #281483 15%, #8f6ed5 70%, #d782d9 94%) !important;
}
.competition-header{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2%;    
}
.competition-header > span {
    font-size: 1.1em;
    color: rgb(145, 140, 140);
    font-weight: bold;
}
.sub-line {
    border-width: 1px;
    border-style: solid;
    border-color: rgb(145, 140, 140);
    width: 5%;
    border-radius: 120px;
}

</style>