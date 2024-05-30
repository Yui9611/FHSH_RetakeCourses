<script setup>
const item = {
  start_date: "2024/6/3",
  start_time: "9:00",
  end_date: "2024/6/23",
  end_time: "23:59",
  results_announced: "2024/7/1",
  note: "這裡是注意事項",
};
</script>

<template>
  <div class="bg-Blue">
    <div class="flex justify-center items-center p-1">
      <p class="text-White text-sm font-semibold">開始日期:</p>
      <p class="text-White text-sm border-2 rounded-2xl px-3">
        {{ item.start_date }}
      </p>
      <p class="text-White text-sm font-semibold ml-24">開始時間:</p>
      <p class="text-White text-sm border-2 rounded-2xl px-3">
        {{ item.start_time }}
      </p>
    </div>
    <div class="flex justify-center items-center p-1">
      <p class="text-White text-sm font-semibold">結束日期:</p>
      <p class="text-White text-sm border-2 rounded-2xl px-3">
        {{ item.end_date }}
      </p>
      <p class="text-White text-sm font-semibold ml-24">結束時間:</p>
      <p class="text-White text-sm border-2 rounded-2xl px-3">
        {{ item.end_time }}
      </p>
    </div>
    <div class="flex justify-center items-center p-1">
      <p class="text-White text-sm font-semibold p-1">結果公布日期:</p>
      <p class="text-White text-sm border-2 rounded-2xl px-3">
        {{ item.results_announced }}
      </p>
    </div>
    <div class="flex justify-center items-center p-1">
      <p class="text-White text-sm font-semibold p-1">注意事項:</p>
      <p class="text-White text-sm border-2 rounded-2xl px-3">
        {{ item.note }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
