<script setup>
import { ref, reactive } from "vue";
import api from "../api";
import { useRouter } from "vue-router";
const router = useRouter();
const userData = reactive({ email: "", password: "" });
const loginUser = () => {
  api
    .post("admins/login", userData)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      router.push("/admin/home");
      console.log("res", res);
    })
    .catch((err) => {
      console.log("error", err);
    });
};
</script>
<template>
  <div
    class="bg-gradient-to-br from-cyan-600 to-blue-300 flex justify-center items-center h-screen"
  >
    <div class="bg-white py-11 px-8 w-[475px] rounded-2xl text-center">
      <img
        class="mx-auto mb-11 h-10 w-[500px]"
        src="/icons/touristan.svg"
        alt=""
      />
      <h2 class="text-2xl font-medium mb-2">Sign In</h2>
      <p class="text-sm text-[#6C6C6C] mb-12">
        Enter your credentials to access your account
      </p>
      <form @submit.prevent="loginUser" action="" class="text-left">
        <div class="mb-5">
          <label class="mb-2" for="">Email</label>
          <input
            v-model="userData.email"
            autocomplete
            type="text"
            class="block border w-full p-[15px] focus:border-blue-400 outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-8">
          <label class="mb-2" for="">Password</label>
          <input
            v-model="userData.password"
            autocomplete
            type="text"
            class="block border w-full p-[15px] focus:border-blue-400 outline-none"
            placeholder="Enter your password"
          />
        </div>

        <button
          class="py-2 bg-gradient-to-br from-cyan-600 to-blue-300 text-white w-full"
        >
          SIGN IN
        </button>
      </form>
      <p class="mt-7 text-[#6C6C6C]">
        Forgot your password?
        <router-link class="text-blue-600 underline">
          Reset Password</router-link
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
