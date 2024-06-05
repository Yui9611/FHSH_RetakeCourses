<script setup>
import { ref } from "vue";
import axios from "axios";
import { parseISO, format } from "date-fns";

const open_time = new Date();

const close_time = ref("");

// axios
//   .get("https://retake-be-08262.replit.app/")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     // 錯誤處理
//     // console.log(error);
//     const data = error.response.data.detail;
//     open_time.value = data.open_time;
//     close_time.value = data.close_time;
//     const raw_open_time = response.data.detail.open_time;
//     const raw_close_time = response.data.detail.close_time;

//     // 解析並格式化日期
//     open_time.value = format(parseISO(raw_open_time), "yyyy-MM-dd");
//     close_time.value = format(parseISO(raw_close_time), "yyyy-MM-dd");
//   });
</script>

<template>
  <div class="bg-slate-50 h-lvh w-lvw flex items-center justify-center">
    <img class="w-44 h-32 mr-10" src="\src\assets\lit_logo.png" />
    <div>
      <p class="font-bold m-5">系統暫未開放</p>
      <p>
        開放報名時間：<time>{{ open_time }}</time>
      </p>
      <p>
        結束報名時間：<time>{{ close_time }}</time>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
