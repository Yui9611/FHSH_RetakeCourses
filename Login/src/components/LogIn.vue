<script setup>
const resp = await fetch(url, get_user_fetch_options);
const google_login_callback = (response) => {
  const token = response.credential;
  const result = login_with_google_id_token(token);
  if (result.status !== 200) {
    error_data.status = result.status;
    error_data.desc = result.desc;
    states.error_occur = true;
    return;
  }
  // console.log("Handle the response", response);
};
</script>

<template>
  <button
    class="bg-Blue mt-5 p-2 px-3 rounded-xl text-White font-semibold"
    href="Registration.html"
  >
    登入
  </button>
  <GoogleLogin :callback="google_login_callback" />
</template>

<style scoped></style>
