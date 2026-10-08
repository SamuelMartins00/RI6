export class Bhaskara {

    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calcular(): number[] {
        const delta = this.b ** 2 - 4 * this.a * this.c;

        const x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
        const x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);

        return [x1, x2];
    }
}