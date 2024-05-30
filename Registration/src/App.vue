<script setup>
import Item from "/src/components/Item.vue";
import Head from "/src/components/Head.vue";
</script>

<template>
  <div class="bg-White w-dvw h-fit min-h-dvh py-5">
    <div class="flex">
      <img class="w-16 h-12" src="\src\assets\lit_logo.png" />
      <p class="font-semibold text-Blue text-3xl pt-3">
        復興高中重補修報名系統
      </p>
    </div>
    <Head></Head>
    <div class="">
      <Item></Item>
    </div>
  </div>
</template>

<style scoped></style>
