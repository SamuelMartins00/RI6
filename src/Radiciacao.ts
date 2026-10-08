import { Operacao } from "./Operacao";

export class Radiciacao extends Operacao {
    
    calcular(): number {
        return this.numero1 ** (1 / this.numero2)
    }
}