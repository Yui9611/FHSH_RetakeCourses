<script setup>
// import states from "/src/Utils/states.js";

const subjects = {
  Name: "國一上國語文(上午班)",
  Num: "1010101",
  Class: "A",
  Grade: "高三",
  Semester: "上學期",
  Amount: "960",
  ClassDate: "7/17、7/19、7/21、7/24、7/25、7/27",
  ClassTime: "08:00~12:00",
};
</script>

<template>
  <div
    class="h-fit border border-slate-300 rounded-2xl p-3 m-6 flex flex-wrap justify-center"
  >
    <div class="flex p-2">
      <div class="bg-Blue w-1 rounded m-1"></div>
      <div class="flex justify-between w-52 p-2">
        <p class="text-base font-semibold">科目名稱</p>
        <p class="text-sm">{{ subjects.Name }}</p>
      </div>
    </div>
    <div class="flex p-2">
      <div class="bg-Blue w-1 rounded m-1"></div>
      <div class="flex justify-between w-52 p-2">
        <p class="text-base font-semibold">科目代碼</p>
        <p class="text-sm">{{ subjects.Num }}</p>
      </div>
    </div>
    <div class="flex p-2">
      <div class="bg-Blue w-1 rounded m-1"></div>
      <div class="flex justify-between w-52 p-2">
        <p class="text-base font-semibold">班級</p>
        <p class="text-sm">{{ subjects.Class }}</p>
      </div>
    </div>
    <div class="flex p-2">
      <div class="bg-Blue w-1 rounded m-1"></div>
      <div class="flex justify-between w-52 p-2">
        <p class="text-base font-semibold">年級</p>
        <p class="text-sm">{{ subjects.Grade }}</p>
      </div>
    </div>
    <div class="flex p-2">
      <div class="bg-Blue w-1 rounded m-1"></div>
      <div class="flex justify-between w-52 p-2">
        <p class="text-base font-semibold">學期</p>
        <p class="text-sm">{{ subjects.Semester }}</p>
      </div>
    </div>
    <div class="flex p-2">
      <div class="bg-Blue w-1 rounded m-1"></div>
      <div class="flex justify-between w-52 p-2">
        <p class="text-base font-semibold">金額</p>
        <p class="text-sm">{{ subjects.Amount }}</p>
      </div>
    </div>
    <div class="flex p-2">
      <div class="bg-Blue w-1 rounded m-1"></div>
      <div class="flex justify-between w-52 p-2">
        <p class="text-base font-semibold">上課日期</p>
        <p class="text-sm">{{ subjects.ClassDate }}</p>
      </div>
    </div>
    <div class="flex p-2">
      <div class="bg-Blue w-1 rounded m-1"></div>
      <div class="flex justify-between w-52 p-2">
        <p class="text-base font-semibold">上課時間</p>
        <p class="text-sm">{{ subjects.ClassTime }}</p>
      </div>
    </div>
  </div>
  <div></div>
</template>

<style scoped></style>
