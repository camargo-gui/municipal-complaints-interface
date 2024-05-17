import { HttpClient } from "@/common/http-client/http-client";
import { Orgao } from "@/entities/orgao";

export class OrgaoService {
  private client: HttpClient;

  public constructor() {
    this.client = HttpClient.getInstance();
  }

  public async get(): Promise<Orgao[]> {
    return this.client.request({
      url: "/api/orgao",
      method: "GET",
    });
  }

  public async put(orgao: Orgao): Promise<Orgao> {
    return this.client.request({
      url: `/api/orgao/${orgao.id}`,
      method: "PUT",
      data: orgao,
    });
  }

  public async create(orgao: Orgao): Promise<void> {
    return this.client.request({
      url: "/api/orgao",
      method: "POST",
      data: orgao,
    });
  }

  public async delete(id: number): Promise<void> {
    return this.client.request({
      url: `/api/orgao/${id}`,
      method: "DELETE",
    });
  }
}
