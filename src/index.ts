import readline from "readline";
import { Operacao } from "./Operacao";
import { Soma } from "./Soma";
import { Subtracao } from "./Subtracao";
import { Multiplicacao } from "./Multiplicacao";
import { Divisao } from "./Divisao";
import { Potenciacao } from "./Potenciacao";
import { Radiciacao } from "./Radiciacao";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número: ", (resposta1) => {
    const numero1 = Number(resposta1);

    rl.question("Digite o segundo número: ", (resposta2) => {
        const numero2 = Number(resposta2);

        console.log("\nEscolha uma operação:");
        console.log("1 - Soma");
        console.log("2 - Subtração");
        console.log("3 - Multiplicação");
        console.log("4 - Divisão");
        console.log("5 - Potenciação");
        console.log("6 - Radiciação");

        rl.question("Opção: ", (respostaOpcao) => {
            const opcao = Number(respostaOpcao);

            let operacao: Operacao;

            switch (opcao) {
                case 1:
                    operacao = new Soma(numero1, numero2);
                    break;

                case 2:
                    operacao = new Subtracao(numero1, numero2);
                    break;

                case 3:
                    operacao = new Multiplicacao(numero1, numero2);
                    break;

                case 4:
                    operacao = new Divisao(numero1, numero2);
                    break;

                case 5:
                    operacao = new Potenciacao(numero1, numero2);
                    break;

                case 6:
                    operacao = new Radiciacao(numero1, numero2);
                    break;

                default:
                    console.log("Opção inválida.");
                    rl.close();
                    return;
            }

            console.log("Resultado:", operacao.calcular());

            rl.close();
        });
    });
});