import { Orgao } from "./orgao";
import { Tipo } from "./tipo";
import { Usuario } from "./usuario";

export class Denuncia {
  public constructor(
    public id: number,
    public titulo: string,
    public texto: string,
    public urgencia: number,
    public data: Date,
    public orgao: Orgao,
    public tipo: Tipo,
    public usuario: Usuario
  ) {}
}