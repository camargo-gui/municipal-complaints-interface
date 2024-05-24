import { HttpClient } from "@/common/http-client/http-client";
import { Tipo } from "@/entities/tipo";

export class TipoService {
  private httpClient: HttpClient;

  private adminUrl = "/api/admin/tipo";
  private publicUrl = "/api/public/tipo";

  public constructor() {
    this.httpClient = HttpClient.getInstance();
  }

  create = async (tipo: Tipo): Promise<Tipo> => {
    return this.httpClient.request({
      url: this.adminUrl,
      method: "POST",
      data: tipo,
    });
  }

  getAll = async (): Promise<Tipo[]> => {
    return this.httpClient.request({
      url: this.publicUrl,
      method: "GET",
    });
  }

  delete = async (id: number) => {
    return this.httpClient.request({
      url: `${this.adminUrl}/${id}`,
      method: "DELETE",
    });
  }

  update = async (tipo: Tipo) => {
    return this.httpClient.request({
      url: `${this.adminUrl}/${tipo.id}`,
      method: "PUT",
      data: tipo,
    });
  }
}