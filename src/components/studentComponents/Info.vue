<template>
  <main class="container">
    <div class="student-name">
      <h3>Student Name</h3>
    </div>
    <div class="notes">
      <h4>: ملاحاطات المدرس</h4>
      <ul>
        <li v-for="(note, index) in notes" :key="index">
          {{ note }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      notes: [
        "يوجد امتحان على الفصل الخامس و السادس الحصه القادمه",
        "برجاء عدم الحديث فى الحصه لعدم التعرض اللخروج منها",
        "يوجد مسابقه للطلاب المتفوقين و جوائز للمركز الاول و الثانى للمشاركه سجل مع السكيرتاريه"
      ]
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
.student-name {
}
.notes {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 2vw;
  margin-top: 4vh;
}
ul{
  margin-top: 4vh;
  list-style-type: circle;
  direction: rtl;
  text-align: right;
}
li + li {
  margin-top: 2vh;
}
</style>