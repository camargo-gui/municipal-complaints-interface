<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-300"
  >
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-center text-2xl font-bold text-gray-700">
        Bem-vindo ao Ativo e Operante!
      </h1>
      <form @submit.prevent="login" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >E-mail</label
          >
          <input
            type="email"
            id="email"
            v-model="credentials.email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Senha</label
          >
          <input
            type="password"
            id="password"
            v-model="credentials.password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginView",
  setup() {
    const router = useRouter();
    const credentials = ref({ email: "", password: "" });
    const error = ref("");

    const login = async () => {
      router.push("/admin/dashboard");
    };

    return { credentials, error, login };
  },
});
</script>
