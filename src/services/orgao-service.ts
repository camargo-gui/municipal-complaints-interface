import { HttpClient } from "@/common/http-client/http-client";
import { Orgao } from "@/entities/orgao";

export class OrgaoService {
  private client: HttpClient;

  private adminUrl = "/api/admin/orgao";
  private publicUrl = "/api/public/orgao";

  public constructor() {
    this.client = HttpClient.getInstance();
  }

  public async get(): Promise<Orgao[]> {
    return this.client.request({
      url: this.publicUrl,
      method: "GET",
    });
  }

  public async put(orgao: Orgao): Promise<Orgao> {
    return this.client.request({
      url: `${this.adminUrl}/${orgao.id}`,
      method: "PUT",
      data: orgao,
    });
  }

  public async create(orgao: Orgao): Promise<void> {
    return this.client.request({
      url: this.adminUrl,
      method: "POST",
      data: orgao,
    });
  }

  public async delete(id: number): Promise<void> {
    return this.client.request({
      url: `${this.adminUrl}/${id}`,
      method: "DELETE",
    });
  }
}
