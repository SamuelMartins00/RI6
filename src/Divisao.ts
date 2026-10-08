import { Operacao } from "./Operacao";

export class Divisao extends Operacao {

    calcular(): number {
        return this.numero1 / this.numero2
    }
}