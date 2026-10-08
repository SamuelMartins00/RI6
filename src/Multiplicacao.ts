import { Operacao } from "./Operacao";

export class Multiplicacao extends Operacao {

    calcular(): number {
        return this.numero1 * this.numero2
    }
}