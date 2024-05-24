import { HttpClient } from "@/common/http-client/http-client";
import { Denuncia } from "@/entities/denuncia";
import { Feedback } from "@/entities/feedback";

export class FeedbackService {
  private client: HttpClient;

  private adminUrl = "/api/admin/feedback";
  private publicUrl = "/api/public/feedback";

  public constructor() {
    this.client = HttpClient.getInstance();
  }
  
  create = async (feedback: Feedback) => {
    return this.client.request({
      url: this.adminUrl,
      method: "POST",
      data: feedback,
    });
  }

  getByDenunciaId = async (id: string) => {
    return this.client.request({
      url: `${this.publicUrl}/${id}`,
      method: "GET",
    });
  }

  update = async (feedback: Feedback) => {
    return this.client.request({
      url: `${this.adminUrl}/${feedback.denuncia.id}`,
      method: "PUT",
      data: feedback,
    });
  }
}