<script setup>
import { ref } from "vue";
const google_login_callback = async (response) => {
  const token = response.credential;

  if (result.status !== 200) {
    error_data.status = result.status;
    error_data.desc = result.desc;
    states.error_occur = true;
    return;
  }
};
</script>

<template>
  <!-- <button
    class="bg-Blue mt-5 p-2 px-3 rounded-xl text-White font-semibold"
    href="Registration.html"
  >
    登入
  </button> -->
  <GoogleLogin :callback="google_login_callback" />
</template>

<style scoped></style>
