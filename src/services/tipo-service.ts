import { HttpClient } from "@/common/http-client/http-client";
import { Tipo } from "@/entities/tipo";

export class TipoService {
  private httpClient: HttpClient;

  public constructor() {
    this.httpClient = HttpClient.getInstance();
  }

  getAll = async (): Promise<Tipo[]> => {
    return this.httpClient.request({
      url: "/api/tipo",
      method: "GET",
    });
  }
}