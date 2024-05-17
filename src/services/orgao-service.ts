import { HttpClient } from "@/common/http-client/http-client";
import { Orgao } from "@/entities/orgao";

export class OrgaoService {
  private client: HttpClient;

  public constructor() {
    this.client = HttpClient.getInstance();
  }

  public async get(): Promise<Orgao> {
    return this.client.request({
      url: "/api/orgao",
      method: "GET",
    });
  }
}
