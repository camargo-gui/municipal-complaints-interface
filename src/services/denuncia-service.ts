import { HttpClient } from "@/common/http-client/http-client";
import { Denuncia } from "@/entities/denuncia";

export class DenunciaService {
  private client: HttpClient;

  private adminUrl = "/api/admin/denuncia";
  private publicUrl = "/api/public/denuncia";

  public constructor() {
    this.client = HttpClient.getInstance();
  }
  
  create = async (denuncia: Denuncia) => {
    return this.client.request({
      url: this.publicUrl,
      method: "POST",
      data: denuncia,
    });
  }

  getAll = async () => {
    return this.client.request({
      url: this.adminUrl,
      method: "GET",
    });
  }

  getById = async (id: number) => {
    return this.client.request({
      url: `${this.publicUrl}/${id}`,
      method: "GET",
    });
  }

  delete = async (id: number) => {
    return this.client.request({
      url: `${this.publicUrl}/${id}`,
      method: "DELETE",
    });
  }

}