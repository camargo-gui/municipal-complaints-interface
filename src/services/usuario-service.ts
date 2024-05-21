import { HttpClient } from "@/common/http-client/http-client";
import { Usuario } from "@/entities/usuario";

export class UsuarioService {
  private httpClient: HttpClient;

  public constructor() {
    this.httpClient = HttpClient.getInstance();
  }

  create = async (data: Usuario) => {
    return this.httpClient.request({
      url: "/api/usuario",
      method: "POST",
      data
    });
  }
}