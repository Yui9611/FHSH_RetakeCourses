<script setup>
import LogIn from "./components/LogIn.vue";
</script>

<template>
  <div class="bg-Blue w-dvw h-dvh flex items-center justify-center">
    <div class="bg-White flex pb-8 px-5 rounded-xl">
      <div class="justify-items-center">
        <img class="w-56 h-40 m-10" src="\src\assets\lit_logo.png" />
        <p class="font-semibold text-Blue text-3xl m-10">
          復興高中<br />重補修報名系統
        </p>
        <LogIn />
      </div>
      <div>
        <!-- <input
          class="flex w-240 h-12 m-5 p-2 border-2 rounded-2xl"
          placeholder="請輸入學號..."
        />
        <input
          class="flex w-240 h-12 m-5 p-2 border-2 rounded-2xl"
          placeholder="請輸入身份證號碼"
        /> -->
      </div>
    </div>
  </div>
</template>
<style scoped></style>
