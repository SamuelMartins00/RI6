import { Operacao } from "./Operacao";

export class Soma extends Operacao{

    calcular(): number {
        return this.numero1 + this.numero2
    }
}