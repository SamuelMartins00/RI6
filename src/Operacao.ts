export abstract class Operacao {
    protected numero1: number;
    protected numero2: number;

    constructor(numero1: number, numero2: number) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    abstract calcular(): number;
}