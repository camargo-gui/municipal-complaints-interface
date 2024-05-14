<template>
  <div class="min-h-screen bg-gray-50">
    <div class="p-5 text-2xl text-white bg-gray-800">
      Painel de Controle - Administração
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5">
      <!-- Cartão para Usuários -->
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h2 class="text-xl font-bold mb-2 text-gray-800">Usuários</h2>
        <p class="text-gray-600">Gerenciar todos os usuários do sistema.</p>
        <button
          class="mt-4 bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        >
          Acessar
        </button>
      </div>

      <!-- Cartão para Denúncias -->
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h2 class="text-xl font-bold mb-2 text-gray-800">Denúncias</h2>
        <p class="text-gray-600">Visualizar e gerenciar as denúncias.</p>
        <button
          class="mt-4 bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/admin/denuncias')"
        >
          Acessar
        </button>
      </div>

      <!-- Cartão para Órgãos -->
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h2 class="text-xl font-bold mb-2 text-gray-800">Órgãos</h2>
        <p class="text-gray-600">Gerenciar órgãos responsáveis.</p>
        <button
          @click="$router.push('/admin/orgaos')"
          class="mt-4 bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
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
