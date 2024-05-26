<script setup>
const items = [
  "科目名稱",
  "科目代碼",
  "班級",
  "年級",
  "學期",
  "金額",
  "上課日期",
  "上課時間",
];

const Temporary = [
  "SujectName",
  "SujectNum",
  "class",
  "Grade",
  "Semester",
  "Amount",
  "ClassDate",
  "ClassTime",
];

// SujectName: "國一上國語文(上午班)", SujectNum: "1011010101", Class: "A"

const SujectName = ["國一上國語文(上午班)", "", ""];
const SujectNum = ["1011010101"];
const Class = ["A"];
const Grade = [];
const Semester = [];
const Amount = [];
const ClassDate = [];
const ClassTime = [];
</script>

<template>
  <div
    class="h-fit border border-slate-300 rounded-2xl p-3 m-6 flex flex-wrap justify-start"
  >
    <div class="flex p-2" v-for="(item, index) in items">
      <div class="bg-Blue w-1 rounded m-1"></div>
      <div class="flex justify-between w-52 p-2">
        <p class="text-base font-semibold">{{ item }}</p>
        <p class="text-sm">{{ SujectName[index] }}</p>
      </div>
    </div>
  </div>
  <div></div>
</template>

<style scoped></style>
