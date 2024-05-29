<script setup>
const google_login_callback = (response) => {
  console.log("Handle the response", response);
};
</script>

<template>
  <a
    class="bg-Blue mt-5 p-2 px-3 rounded-xl text-White font-semibold"
    href="Registration.html"
    >登入</a
  >
  <GoogleLogin :callback="google_login_callback" />
</template>

<style scoped></style>
