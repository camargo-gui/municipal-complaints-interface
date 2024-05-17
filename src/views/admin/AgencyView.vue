<template>
  <div class="min-h-screen bg-gray-100 p-5">
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">
      Gerenciamento de Órgãos
    </h1>

    <!-- Formulário para adicionar/editar órgãos -->
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="orgNome" class="block text-sm font-medium text-gray-800">
            Nome do Órgão
          </label>
          <input
            type="text"
            id="orgNome"
            v-model="orgaoForm.nome"
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

    <!-- Lista de órgãos -->
    <div class="mt-8">
      <h2 class="text-xl font-bold text-gray-800">Lista de Órgãos</h2>
      <div class="mt-4 space-y-2">
        <div
          v-for="orgao in orgaos"
          :key="orgao.id"
          class="bg-white p-4 rounded-lg shadow flex justify-between items-center"
        >
          <div class="text-gray-700">{{ orgao.nome }}</div>
          <div>
            <button
              @click="editOrgao(orgao)"
              class="bg-green-600 hover:bg-green-800 text-white font-bold py-1 px-3 rounded mr-2"
            >
              Editar
            </button>
            <button
              @click="deleteOrgao(orgao.id)"
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
import { OrgaoService } from "@/services/orgao-service";

export default {
  name: "AgencyView",
  beforeMount() {
    this.fetchOrgaos();
  },
  data() {
    return {
      service: new OrgaoService(),
      orgaos: [],
      orgaoForm: {
        id: null,
        nome: "",
      },
      editing: false,
    };
  },
  methods: {
    async fetchOrgaos() {
      const orgaos = await this.service.get();
      this.orgaos = orgaos;
    },
    async handleSubmit() {
      if (this.editing) {
        await this.service.put(this.orgaoForm);
        this.editing = false;
      } else {
        await this.service.create(this.orgaoForm);
      }
      await this.fetchOrgaos();
      this.resetForm();
    },
    editOrgao(orgao) {
      this.orgaoForm = { ...orgao };
      this.editing = true;
    },
    async deleteOrgao(id) {
      if (confirm("Tem certeza que deseja excluir este órgão?")) {
        await this.service.delete(id);
        await this.fetchOrgaos();
      }
    },
    resetForm() {
      this.orgaoForm = { id: null, nome: "" };
    },
  },
};
</script>
