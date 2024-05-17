import { prop } from "vue-class-component";

export class Usuario {
  public constructor(
    public id: number,
    public cpf: string,
    public email: string,
    public senha: string,
    public nivel: number
  ) {}
}
