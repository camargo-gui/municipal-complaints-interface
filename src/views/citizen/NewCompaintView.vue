<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold text-center mb-6">Criar Nova Reclamação</h1>
    <form
      @submit.prevent="submitReclamacao"
      class="max-w-lg mx-auto bg-white p-6 rounded shadow"
    >
      <div class="mb-4">
        <label for="titulo" class="block text-sm font-medium text-gray-700"
          >Título</label
        >
        <input
          type="text"
          id="titulo"
          v-model="novaReclamacao.titulo"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div class="mb-4">
        <label for="descricao" class="block text-sm font-medium text-gray-700"
          >Descrição</label
        >
        <textarea
          id="descricao"
          v-model="novaReclamacao.descricao"
          rows="4"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="tipo" class="block text-sm font-medium text-gray-700"
          >Tipo</label
        >
        <select
          id="tipo"
          v-model="novaReclamacao.tipo"
          class="block w-full mt-1 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option disabled value="">Selecione um tipo</option>
          <option v-for="tipo in tipos" :key="tipo" :value="tipo">
            {{ tipo }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label for="orgao" class="block text-sm font-medium text-gray-700"
          >Órgão Responsável</label
        >
        <select
          id="orgao"
          v-model="novaReclamacao.orgao"
          class="block w-full mt-1 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option disabled value="">Selecione um órgão</option>
          <option v-for="orgao in orgaos" :key="orgao" :value="orgao">
            {{ orgao }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label for="prioridade" class="block text-sm font-medium text-gray-700"
          >Prioridade</label
        >
        <select
          id="prioridade"
          v-model="novaReclamacao.prioridade"
          class="block w-full mt-1 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option disabled value="">Selecione a prioridade</option>
          <option
            v-for="prioridade in prioridades"
            :key="prioridade"
            :value="prioridade"
          >
            {{ prioridade }}
          </option>
        </select>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Enviar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novaReclamacao: {
        titulo: "",
        descricao: "",
        tipo: "",
        orgao: "",
        prioridade: "",
      },
      tipos: ["Infraestrutura", "Serviço Público", "Saúde", "Educação"],
      orgaos: [
        "Prefeitura",
        "SETRAN",
        "Ministério da Saúde",
        "Secretaria de Educação",
      ],
      prioridades: ["Baixa", "Média", "Alta"],
    };
  },
  methods: {
    submitReclamacao() {
      // Logica para enviar os dados ao servidor
      console.log("Reclamação enviada:", this.novaReclamacao);
      this.$router.push("/citizen/home"); // Redireciona para a home após o envio
    },
  },
};
</script>
