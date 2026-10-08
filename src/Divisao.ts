import { Operacao } from "./Operacao";

export class Divisao extends Operacao {

    calcular(): number {
        if (this.numero2 === 0) {
            throw new Error("Não é possível dividir por zero.");
        }

        return this.numero1 / this.numero2;
    }
}