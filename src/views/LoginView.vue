<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 to-gray-900"
  >
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-center text-2xl font-bold text-gray-800">
        Ativo e operante
      </h1>
      <form @submit.prevent="login" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            v-model="credentials.email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            placeholder="Insira seu e-mail"
            required
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            type="password"
            id="password"
            v-model="credentials.senha"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            Entrar
          </button>
        </div>
      </form>
      <div>
        <button
          @click="goToRegister"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          Criar Conta
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { HttpClient } from "@/common/http-client/http-client";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginView",
  beforeMount() {
    HttpClient.getInstance().resetToken();
  },
  setup() {
    const router = useRouter();
    const credentials = ref({ email: "", senha: "" });
    const error = ref("");

    const login = async () => {
      const response = await HttpClient.getInstance().request({
        url: "/login",
        method: "POST",
        data: credentials.value,
      });

      if (response) {
        localStorage.setItem("token", response.token);
        HttpClient.getInstance().setAuthorization(response.token);

        if (response.role === "1") {
          return router.push("/admin/dashboard");
        }
        return router.push("/denuncias");
      }
    };

    const goToRegister = () => {
      router.push("/register");
    };

    return { credentials, error, login, goToRegister };
  },
});
</script>
