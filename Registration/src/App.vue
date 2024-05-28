<script setup>
import Item from "/src/components/Item.vue";
</script>

<template>
  <div class="bg-White w-dvw h-fit min-h-dvh py-5">
    <div class="flex">
      <img class="w-16 h-12" src="\src\assets\lit_logo.png" />
      <p class="font-semibold text-Blue text-3xl pt-3">
        復興高中重補修報名系統
      </p>
    </div>
    <div class="bg-Blue">
      <div class="flex justify-center">
        <p class="text-White text-sm font-semibold">開始日期:</p>
        <p class="text-White text-sm font-semibold">開始時間:</p>
      </div>
      <div class="flex justify-center">
        <p class="text-White text-sm font-semibold">結束日期:</p>
        <p class="text-White text-sm font-semibold">結束時間:</p>
      </div>
      <p class="text-White text-sm font-semibold">結果公布日期:</p>
      <p class="text-White text-sm font-semibold">注意事項:</p>
    </div>
    <div class="">
      <Item></Item>
      <div class="flex justify-between"></div>
    </div>
  </div>
</template>

<style scoped></style>
