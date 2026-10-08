import readline from "readline";
import { Operacao } from "./Operacao";
import { Soma } from "./Soma";
import { Subtracao } from "./Subtracao";
import { Multiplicacao } from "./Multiplicacao";
import { Divisao } from "./Divisao";
import { Potenciacao } from "./Potenciacao";
import { Radiciacao } from "./Radiciacao";
import { Bhaskara } from "./Bhaskara";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(
    "Escolha o tipo de operação:\n1 - Operação com 2 números\n2 - Bhaskara\n\nOpção: ",
    (respostaTipo) => {
        const tipo = Number(respostaTipo);

        if (tipo === 1) {
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

                        try {
                            console.log(
                                "Resultado:",
                                operacao.calcular()
                            );
                        } catch (erro) {
                            console.log(
                                "Erro:",
                                (erro as Error).message
                            );
                        } finally {
                            rl.close();
                        }
                    });
                });
            });
        } else if (tipo === 2) {
            rl.question("Digite o valor de a: ", (respostaA) => {
                const a = Number(respostaA);

                rl.question("Digite o valor de b: ", (respostaB) => {
                    const b = Number(respostaB);

                    rl.question("Digite o valor de c: ", (respostaC) => {
                        const c = Number(respostaC);

                        const bhaskara = new Bhaskara(a, b, c);

                        try {
                            const [x1, x2] = bhaskara.calcular();

                            console.log("x1 =", x1);
                            console.log("x2 =", x2);
                        } catch (erro) {
                            console.log(
                                "Erro:",
                                (erro as Error).message
                            );
                        } finally {
                            rl.close();
                        }
                    });
                });
            });
        } else {
            console.log("Opção inválida.");
            rl.close();
        }
    }
);