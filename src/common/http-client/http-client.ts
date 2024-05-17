import { Token } from "@/entities/token";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { useToast } from "vue-toastification";

export class HttpClient {
  private static instance: HttpClient;
  private client: AxiosInstance;

  private constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:8080",
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error) => this.errorInterceptor(error)
    );

    const token = localStorage.getItem("token");
    if (token) {
      this.setAuthorization(token);
    }
  }

  private async errorInterceptor(error: AxiosError<any>): Promise<void> {
    if (error.response?.data.message) {
      useToast().error(error.response.data.message);
    }
  }

  public setAuthorization(token: string): void {
    this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  public getToken(): Token | undefined {
    const token = localStorage.getItem("token");
    if (token) {
      return new Token(token);
    }
  }

  public resetToken(): void {
    delete this.client.defaults.headers.common["Authorization"];
  }

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }

    return HttpClient.instance;
  }

  async request(config: AxiosRequestConfig): Promise<any> {
    const response = await this.client.request(config);
    if (response) {
      return response.data;
    }
  }
}
