<template>
  <div class="tw-h-[90vh] tw-pt-10 lg:tw-pt-0 tw-flex">
    <div
      class="tw-w-1/2 tw-bg-cover tw-bg-center tw-hidden lg:tw-block"
      :style="`background-image: url(${getImageUrl('register.png')});`"
    ></div>
    <div
      class="tw-w-full lg:tw-w-1/2 tw-flex tw-justify-center tw-items-center tw-px-4"
    >
      <form
        class="tw-flex tw-flex-col tw-gap-5 lg:tw-w-1/2 tw-w-full"
        @submit.prevent="login"
      >
        <div class="tw-flex tw-flex-col tw-gap-2">
          <div class="tw-text-[#bf9d7d] tw-text-sm tw-font-bold">
            享樂酒店，誠摯歡迎
          </div>
          <div class="tw-text-white tw-text-4xl tw-font-bold">立即開始旅程</div>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-4">
          <div class="tw-flex tw-flex-col tw-gap-2">
            <label for="" class="tw-text-white tw-text-sm tw-font-bold"
              >電子信箱</label
            >
            <input
              id="email"
              type="email"
              placeholder="hello@exsample.com"
              class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border"
              v-model="userInfo.email"
            />
          </div>
          <div class="tw-flex tw-flex-col tw-gap-2">
            <label for="" class="tw-text-white tw-text-sm tw-font-bold"
              >密碼</label
            >
            <input
              id="password"
              type="password"
              placeholder="請輸入密碼"
              class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border"
              v-model="userInfo.password"
            />
          </div>
          <div class="tw-flex">
            <div class="tw-flex-1 tw-flex tw-items-center tw-gap-2">
              <input
                type="checkbox"
                class="tw-w-6 tw-h-6"
                id="remember"
                v-model="rememberMe"
              />
              <label
                for="remember"
                class="tw-text-white tw-text-sm tw-font-bold"
                >記住帳號</label
              >
            </div>
            <div class="tw-flex tw-justify-center tw-items-center">
              <a
                href="#"
                class="tw-text-center tw-text-[#bf9d7d] tw-text-sm tw-font-bold tw-underline"
                >忘記密碼？</a
              >
            </div>
          </div>
        </div>
        <div>
          <div v-if="loginError" class="tw-text-red-500 tw-text-center tw-mb-2">
            {{ loginError }}
          </div>
          <div
            class="tw-flex-1 tw-flex tw-justify-center tw-items-center tw-bg-gray-200 tw-rounded"
          >
            <button
              type="submit"
              id="login"
              class="tw-p-4 tw-text-center tw-text-gray-600 tw-text-sm tw-font-bold tw-w-full"
            >
              會員登入
            </button>
          </div>
        </div>

        <div
          class="tw-flex-1 tw-flex tw-justify-start tw-items-center tw-gap-2"
        >
          <div class="tw-text-white tw-text-sm">沒有會員嗎？</div>
          <router-link
            to="/signup"
            class="tw-text-center tw-text-[#bf9d7d] tw-text-sm tw-font-bold tw-underline"
            >前往註冊</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useHelper } from "@/utils/useHelper";
const { getImageUrl } = useHelper();
const router = useRouter();

const userInfo = ref({ email: "", password: "" });
const rememberMe = ref(false);
const loginError = ref("");

type AccountData = {
  email: string;
  password: string;
};

onMounted(() => {
  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");
  if (savedEmail && savedPassword) {
    userInfo.value.email = savedEmail;
    userInfo.value.password = savedPassword;
    rememberMe.value = true;
  }
});

async function login() {
  if (!checkAccount(userInfo.value)) return;
  loginError.value = "";

  try {
    const response = await axios.post(
      "https://hotel-reservation-backend-sgtq.onrender.com/api/v1/user/login",
      {
        email: userInfo.value.email,
        password: userInfo.value.password,
      }
    );
    localStorage.setItem("auth_token", response.data.data.accessToken);
    localStorage.setItem("userName", response.data.data.name);

    if (rememberMe.value) {
      localStorage.setItem("email", userInfo.value.email);
      localStorage.setItem("password", userInfo.value.password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
    router.push("/"); // 登入成功後導向首頁
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      loginError.value = error.response.data.message;
    } else {
      loginError.value = "登入失敗，請稍後再試。";
    }
  }
}

function checkAccount(data: AccountData) {
  return validEmail(data.email) && validPassword(data.password);
}

function validEmail(mail: string) {
  const emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return emailRegex.test(mail);
}

function validPassword(password: string) {
  return password !== "";
}
</script>

<style scoped></style>
