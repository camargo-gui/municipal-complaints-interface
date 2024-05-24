import { Denuncia } from "@/entities/denuncia";

export class Feedback {
  public constructor(
    public denuncia: Denuncia,
    public texto: string,
    public id?: number
  ){}
}