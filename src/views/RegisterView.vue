<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 to-gray-900"
  >
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
      <h1 class="text-center text-2xl font-bold text-gray-800">
        Crie sua Conta
      </h1>
      <form @submit.prevent="register" class="space-y-6">
        <div>
          <label for="cpf" class="block text-sm font-medium text-gray-700">
            CPF
          </label>
          <input
            type="text"
            id="cpf"
            v-model="credentials.cpf"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            placeholder="Insira seu CPF"
            required
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            v-model="credentials.email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
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
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <div>
          <label for="confirm-password" class="block text-sm font-medium text-gray-700">
            Confirmar Senha
          </label>
          <input
            type="password"
            id="confirm-password"
            v-model="credentials.confirmSenha"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            placeholder="Confirme sua senha"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            @click="create"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            Registrar
          </button>
        </div>
      </form>
      <div class="text-center">
        <p class="text-sm text-gray-600">
          Já tem uma conta?
          <a @click="goToLogin" class="font-medium text-gray-800 hover:text-gray-900 cursor-pointer">
            Entrar
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UsuarioService } from "@/services/usuario-service";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

export default defineComponent({
  name: "RegisterView",
  data() {
    return {
      service: new UsuarioService(),
    };
  },
  methods: {
    async create() {
      await this.service.create({
        cpf: this.credentials.cpf,
        email: this.credentials.email,
        senha: this.credentials.senha,
      });
      useToast().success("Usuário criado com sucesso!");
      this.$router.push("/login");
    }
  },
  setup() {
    const router = useRouter();
    const credentials = ref({ cpf: "", email: "", senha: "", confirmSenha: "" });
    const error = ref("");

    const register = async () => {
      if (credentials.value.senha !== credentials.value.confirmSenha) {
        error.value = "As senhas não coincidem!";
        return;
      }
    };

    const goToLogin = () => {
      router.push("/login");
    };

    return { credentials, error, register, goToLogin };
  },
});
</script>
