<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-12">
      Listagem de reclamações
    </h1>
    <button class="btn btn-primary" @click="criarDenuncia">
      Criar Nova Reclamação
    </button>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto mt-8">
      <div v-for="denuncia in denuncias" :key="denuncia.id" class="card relative">
        <div class="card-header">
          <h2>{{ denuncia.titulo }}</h2>
          <p>{{ denuncia.texto }}</p>
        </div>
        <div class="card-body">
          <div class="info">
            <span><strong>Órgão:</strong> {{ denuncia.orgao.nome }}</span>
            <span><strong>Tipo:</strong> {{ denuncia.tipo.nome }}</span>
            <span>
              <strong>Urgência:</strong>
              <span :class="{
                'high-urgency': denuncia.urgencia > 3,
                'medium-urgency': denuncia.urgencia <= 3,
              }">
                {{ denuncia.urgencia }}
              </span>
            </span>
            <span>
              <strong>Data:</strong>
              {{ formatDate(denuncia.data) }}
            </span>
          </div>
          <div class="card-footer">
            <button @click="toggleDetails(denuncia)" class="btn btn-secondary">
              {{ denuncia.showDetails ? 'Ocultar Feedback' : 'Ver Feedback' }}
            </button>
            <button @click="deleteDenuncia(denuncia.id)" class="btn btn-danger">
              Excluir
            </button>
        </div>
          <transition name="accordion">
            <div v-if="denuncia.showDetails" class="details absolute inset-x-0 top-full bg-white shadow-lg p-4 z-10">
              <div class="feedback">
                <h3>Feedback:</h3>
                <p>{{ denuncia.feedback ?? 'Sem feedback' }}</p>
              </div>
              <div v-if="nivel == 1" class="card-footer">
                <button @click="toggleFeedbackForm(denuncia.id)" class="btn btn-primary">
                  {{ denuncia.feedback ? "Editar" : "Adicionar" }} Feedback
                </button>
              </div>
              <div v-if="denuncia.showFeedbackForm" class="feedback-form">
                <textarea v-model="denuncia.newFeedback" placeholder="Escreva seu feedback aqui"></textarea>
                <button @click="denuncia.feedback ? updateFeedback(denuncia) : submitFeedback(denuncia)" class="btn btn-success">
                  Salvar Feedback
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { HttpClient } from "@/common/http-client/http-client";
import { DenunciaService } from "@/services/denuncia-service";
import { FeedbackService } from "@/services/feedback-service";
import { Feedback } from "@/entities/feedback";
import moment from "moment";
import "../CompaintsView/CompaintsView.styles.css";

export default {
  name: "ComplaintsView",
  data() {
    return {
      denunciaService: new DenunciaService(),
      feedbackService: new FeedbackService(),
      denuncias: [],
      userId: HttpClient.getInstance().getToken().getId(),
      nivel: HttpClient.getInstance().getToken().getNivel(),
    };
  },
  beforeMount() {
    this.fetchDenuncias();
  },
  methods: {
    async fetchDenuncias() {
      let denuncias = [];
      if (this.nivel === "1") {
        denuncias = await this.denunciaService.getAll();
      } else {
        denuncias = await this.denunciaService.getById(this.userId);
      }
      this.denuncias = denuncias.map(denuncia => ({
        ...denuncia,
        showDetails: false,
        showFeedbackForm: false,
        newFeedback: ""
      }));
    },
    async deleteDenuncia(denunciaId) {
      if (confirm("Tem certeza que deseja excluir esta denúncia?")) {
        await this.denunciaService.delete(denunciaId);
        this.denuncias = this.denuncias.filter((d) => d.id !== denunciaId);
      }
    },
    async submitFeedback(denuncia) {
      const feedback = new Feedback(denuncia, denuncia.newFeedback)
      await this.feedbackService.create(feedback);
      denuncia.feedback = denuncia.newFeedback;
      denuncia.showFeedbackForm = false;
    },
    async fetchFeedback(denuncia) {
      const feedback = await this.feedbackService.getByDenunciaId(denuncia.id);
      if (feedback) denuncia.feedback = feedback.texto;
    },
    async updateFeedback(denuncia) {
      const feedback = new Feedback(denuncia, denuncia.newFeedback);
      await this.feedbackService.update(feedback);
      denuncia.feedback = denuncia.newFeedback;
      denuncia.showFeedbackForm = false;
    },
    async toggleDetails(denuncia) {
      if(!denuncia.showDetails) {
        await this.fetchFeedback(denuncia);
      }
      denuncia.showDetails = !denuncia.showDetails;
    },
    toggleFeedbackForm(denunciaId) {
      const denuncia = this.denuncias.find((d) => d.id === denunciaId);
      denuncia.showFeedbackForm = !denuncia.showFeedbackForm;
    },
    criarDenuncia() {
      this.$router.push("/cidadao/criar-denuncia");
    },
    formatDate(date) {
      return moment(date).format("DD/MM/YYYY");
    }, 
  },
};
</script>
