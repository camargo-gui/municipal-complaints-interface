import { HttpClient } from "@/common/http-client/http-client";
import { Denuncia } from "@/entities/denuncia";

export class DenunciaService {
  private client: HttpClient;

  public constructor() {
    this.client = HttpClient.getInstance();
  }
  
  create = async (denuncia: Denuncia) => {
    return this.client.request({
      url: "/api/denuncia",
      method: "POST",
      data: denuncia,
    });
  }

  getAll = async () => {
    return this.client.request({
      url: "/api/denuncia",
      method: "GET",
    });
  }

  getById = async (id: number) => {
    return this.client.request({
      url: `/api/denuncia/${id}`,
      method: "GET",
    });
  }

}