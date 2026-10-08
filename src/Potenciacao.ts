import { Operacao } from "./Operacao";

export class Potenciacao extends Operacao {

    calcular(): number {
        return this.numero1 ** this.numero2
    }
}