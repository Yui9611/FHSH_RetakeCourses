<script setup></script>

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
