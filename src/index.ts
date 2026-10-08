import { Multiplicacao } from "./Multiplicacao";
import { Potenciacao } from "./Potenciacao";
import { Soma } from "./Soma"
import { Subtracao } from "./Subtracao";

const soma = new Soma(10, 5);
const subtracao = new Subtracao(10, 5);
const multiplicacao = new Multiplicacao(10, 5);
const potenciacao = new Potenciacao(10, 5);

console.log(soma.calcular());
console.log(subtracao.calcular());
console.log(multiplicacao.calcular());
console.log(potenciacao.calcular());