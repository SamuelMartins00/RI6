import { Operacao } from "./Operacao";

export class Subtracao extends Operacao {

    calcular(): number {
        return this.numero1 - this.numero2
    }
}