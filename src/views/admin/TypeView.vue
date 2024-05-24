<template>
  <div class="min-h-screen bg-gray-100 p-5">
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">
      Gerenciamento de Tipos
    </h1>

    <!-- Formulário para adicionar/editar órgãos -->
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="tipoNome" class="block text-sm font-medium text-gray-800">
            Nome do Tipo
          </label>
          <input
            type="text"
            id="tipoNome"
            v-model="tipoForm.nome"
            class="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm"
            required
          />
        </div>
        <div class="mt-4 flex justify-end">
          <button
            type="submit"
            class="ml-auto bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          >
            {{ editing ? "Atualizar" : "Adicionar" }}
          </button>
        </div>
      </form>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold text-gray-800">Lista de Tipos</h2>
      <div class="mt-4 space-y-2">
        <div
          v-for="tipo in tipos"
          :key="tipo.id"
          class="bg-white p-4 rounded-lg shadow flex justify-between items-center"
        >
          <div class="text-gray-700">{{ tipo.nome }}</div>
          <div>
            <button
              @click="editTipo(tipo)"
              class="bg-green-600 hover:bg-green-800 text-white font-bold py-1 px-3 rounded mr-2"
            >
              Editar
            </button>
            <button
              @click="deletetipo(tipo.id)"
              class="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-3 rounded"
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TipoService } from "@/services/tipo-service";

export default {
  name: "TypeView",
  beforeMount() {
    this.fetchTipos();
  },
  data() {
    return {
      service: new TipoService(),
      tipos: [],
      tipoForm: {
        id: null,
        nome: "",
      },
      editing: false,
    };
  },
  methods: {
    async fetchTipos() {
      const tipos = await this.service.getAll();
      this.tipos = tipos;
    },
    async handleSubmit() {
      if (this.editing) {
        await this.service.update(this.tipoForm);
        this.editing = false;
      } else {
        await this.service.create(this.tipoForm);
      }
      await this.fetchTipos();
      this.resetForm();
    },
    editTipo(tipo) {
      this.tipoForm = { ...tipo };
      this.editing = true;
    },
    async deletetipo(id) {
      if (confirm("Tem certeza que deseja excluir este órgão?")) {
        await this.service.delete(id);
        await this.fetchTipos();
      }
    },
    resetForm() {
      this.tipoForm = { id: null, nome: "" };
    },
  },
};
</script>
