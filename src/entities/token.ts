export class Token {
  public constructor(
    private token: string
  ) {}

  public getToken(): string {
    return this.token;
  }

  private getPayload(): any {
    const base64Url = this.token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(window.atob(base64));
    return payload;
  }

  public getId(): number {
    const payload = this.getPayload();
    return payload.id;
  }

  public getRole(): number {
    const payload = this.getPayload();
    return payload.role;
  }
}