<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-12">
      Listagem de Denúncias
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <div v-for="denuncia in denuncias" :key="denuncia.id" class="card">
        <div class="card-header">
          <h2>{{ denuncia.titulo }}</h2>
          <p>{{ denuncia.texto }}</p>
        </div>
        <div class="card-body">
          <div class="info">
            <span><strong>Órgão:</strong> {{ denuncia.orgao.nome }}</span>
            <span><strong>Tipo:</strong> {{ denuncia.tipo.nome }}</span>
            <span
              ><strong>Urgência:</strong>
              <span
                :class="{
                  'high-urgency': denuncia.urgencia > 3,
                  'medium-urgency': denuncia.urgencia <= 3,
                }"
                >{{ denuncia.urgencia }}</span
              ></span
            >
            <span
              ><strong>Data:</strong>
              {{ new Date(denuncia.data).toLocaleDateString() }}</span
            >
          </div>
          <div v-if="denuncia.feedback" class="feedback">
            <h3>Feedback:</h3>
            <p>{{ denuncia.feedback }}</p>
          </div>
        </div>
        <div class="card-footer">
          <button
            @click="toggleFeedbackForm(denuncia.id)"
            class="btn btn-primary"
          >
            {{ denuncia.feedback ? "Editar" : "Adicionar" }} Feedback
          </button>
          <button @click="deleteDenuncia(denuncia.id)" class="btn btn-danger">
            Excluir
          </button>
        </div>
        <div v-if="denuncia.showFeedbackForm" class="feedback-form">
          <textarea
            v-model="denuncia.newFeedback"
            placeholder="Escreva seu feedback aqui"
          ></textarea>
          <button @click="submitFeedback(denuncia)" class="btn btn-success">
            Salvar Feedback
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DenunciaService } from '@/services/denuncia-service';

export default {
  name: "ComplaintsView",
  data() {
    return {
      service: new DenunciaService(),
      denuncias: [],
    };
  },
  beforeMount() {
    this.fetchDenuncias();
  },
  methods: {
    async fetchDenuncias() {
      this.denuncias = await this.service.getAll();
    },
    toggleFeedbackForm(denunciaId) {
      const denuncia = this.denuncias.find((d) => d.id === denunciaId);
      denuncia.showFeedbackForm = !denuncia.showFeedbackForm;
    },
    submitFeedback(denuncia) {
      denuncia.feedback = denuncia.newFeedback;
      denuncia.showFeedbackForm = false;
    },
    deleteDenuncia(denunciaId) {
      if (confirm("Tem certeza que deseja excluir esta denúncia?")) {
        this.denuncias = this.denuncias.filter((d) => d.id !== denunciaId);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
}

.title {
  font-size: 2.5em;
  text-align: center;
  color: #333;
  margin-bottom: 40px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-header {
  padding: 20px;
  border-bottom: 1px solid #eaeaea;
}

.card-header h2 {
  font-size: 1.25em;
  color: #333;
  margin: 0 0 10px 0;
}

.card-header p {
  color: #777;
  margin: 0;
}

.card-body {
  padding: 20px;
}

.info span {
  display: block;
  color: #555;
  margin-bottom: 8px;
}

.feedback {
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  background: #f9f9f9;
  border-left: 3px solid #3b82f6;
}

.feedback h3 {
  margin: 0 0 10px 0;
  font-size: 1.1em;
  color: #333;
}

.feedback p {
  margin: 0;
  color: #666;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid #eaeaea;
  background: #f8f8f8;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
}

.btn-primary {
  background-color: #3b82f6;
  color: #fff;
}

.btn-primary:hover {
  background-color: #2563eb;
}

.btn-danger {
  background-color: #ef4444;
  color: #fff;
}

.btn-danger:hover {
  background-color: #dc2626;
}

.btn-success {
  background-color: #10b981;
  color: #fff;
}

.btn-success:hover {
  background-color: #059669;
}

.feedback-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
}

.high-urgency {
  color: #dc2626;
}

.medium-urgency {
  color: #facc15;
}
</style>
