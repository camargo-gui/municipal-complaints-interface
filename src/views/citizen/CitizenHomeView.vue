<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold text-center mb-10 text-gray-800">
        Minhas Reclamações
      </h1>
      <div class="flex justify-end mb-6">
        <router-link
          to="/citizen/new-compaint"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Criar Nova Reclamação
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <div
            v-for="reclamacao in reclamacoes"
            :key="reclamacao.id"
            @click="selectReclamacao(reclamacao)"
            class="p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100"
          >
            <h2 class="text-xl font-semibold text-gray-700">
              {{ reclamacao.titulo }}
            </h2>
            <p class="text-gray-600">{{ reclamacao.descricao }}</p>
            <span class="text-sm font-medium text-gray-500">{{
              reclamacao.data
            }}</span>
          </div>
        </div>
        <div
          v-if="reclamacaoSelecionada"
          class="bg-white p-6 rounded-lg shadow"
        >
          <h2 class="text-2xl font-bold text-gray-800">
            {{ reclamacaoSelecionada.titulo }}
          </h2>
          <p class="my-2 text-gray-600">
            {{ reclamacaoSelecionada.descricao }}
          </p>
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-gray-700">Feedback</h3>
            <p class="text-gray-600">
              {{ reclamacaoSelecionada.feedback || "Ainda não há feedback." }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CitizenHome",
  data() {
    return {
      reclamacoes: [
        {
          id: 1,
          titulo: "Semáforo Quebrado",
          descricao: "O semáforo da esquina não está funcionando.",
          data: new Date("2021-05-12"),
          feedback: "Reparo agendado para 03/06/2021",
        },
        {
          id: 2,
          titulo: "Buraco na Rua",
          descricao: "Existe um grande buraco na rua principal.",
          data: new Date("2021-05-15"),
          feedback: "Equipe já enviada para reparo.",
        },
        // Mais reclamações aqui
      ],
      reclamacaoSelecionada: null,
    };
  },
  methods: {
    selectReclamacao(reclamacao) {
      this.reclamacaoSelecionada = reclamacao;
    },
    formatDate(date) {
      return date.toLocaleDateString();
    },
  },
};
</script>
