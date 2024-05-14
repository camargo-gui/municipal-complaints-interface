<template>
  <div class="min-h-screen bg-gray-100">
    <div class="p-5 text-2xl text-white bg-blue-600">
      Painel de Controle - Admin
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
      <!-- Cartão para Usuários -->
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h2 class="text-xl font-bold mb-2">Usuários</h2>
        <p class="text-gray-700">Gerenciar todos os usuários do sistema.</p>
        <button
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Acessar
        </button>
      </div>

      <!-- Cartão para Denúncias -->
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h2 class="text-xl font-bold mb-2">Denúncias</h2>
        <p class="text-gray-700">Visualizar e gerenciar as denúncias.</p>
        <button
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Acessar
        </button>
      </div>

      <!-- Cartão para Feedbacks -->
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h2 class="text-xl font-bold mb-2">Feedbacks</h2>
        <p class="text-gray-700">Revisar o feedback dos cidadãos.</p>
        <button
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Acessar
        </button>
      </div>

      <!-- Adicione mais cartões conforme necessário -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminDashboardView",
};
</script>

<style scoped>
/* Adicionalmente, você pode adicionar estilos customizados aqui se necessário */
</style>
