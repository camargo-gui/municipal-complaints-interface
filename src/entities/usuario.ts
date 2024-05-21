import { prop } from "vue-class-component";

export class Usuario {
  public constructor(
    public cpf: string,
    public email: string,
    public senha: string,
    public nivel?: number,
    public id?: number
  ) {}
}
