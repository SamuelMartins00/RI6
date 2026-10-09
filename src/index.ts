import readline from "readline";
import { Mensagens } from "./Mensagens";
import { Operacao } from "./Operacao";
import { Soma } from "./Soma";
import { Subtracao } from "./Subtracao";
import { Multiplicacao } from "./Multiplicacao";
import { Divisao } from "./Divisao";
import { Potenciacao } from "./Potenciacao";
import { Radiciacao } from "./Radiciacao";
import { Bhaskara } from "./Bhaskara";

const mensagens = new Mensagens();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(mensagens.menuTipo(), (respostaTipo) => {
    const tipo = Number(respostaTipo);

    if (tipo === 1) {
        rl.question(mensagens.pedirPrimeiroNumero(), (resposta1) => {
            const numero1 = Number(resposta1);

            rl.question(mensagens.pedirSegundoNumero(), (resposta2) => {
                const numero2 = Number(resposta2);

                console.log(mensagens.menuOperacoes());

                rl.question(mensagens.pedirOpcao(), (respostaOpcao) => {
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
                            console.log(mensagens.opcaoInvalida());
                            rl.close();
                            return;
                    }

                    try {
                        console.log(mensagens.resultado(operacao.calcular()));
                    } catch (erro) {
                        console.log(mensagens.erro((erro as Error).message));
                    } finally {
                        rl.close();
                    }
                });
            });
        });
    } else if (tipo === 2) {
        rl.question(mensagens.pedirA(), (respostaA) => {
            const a = Number(respostaA);

            rl.question(mensagens.pedirB(), (respostaB) => {
                const b = Number(respostaB);

                rl.question(mensagens.pedirC(), (respostaC) => {
                    const c = Number(respostaC);

                    const bhaskara = new Bhaskara(a, b, c);

                    try {
                        const [x1, x2] = bhaskara.calcular();

                        console.log(mensagens.raiz(1, x1));
                        console.log(mensagens.raiz(2, x2));
                    } catch (erro) {
                        console.log(mensagens.erro((erro as Error).message));
                    } finally {
                        rl.close();
                    }
                });
            });
        });
    } else {
        console.log(mensagens.opcaoInvalida());
        rl.close();
    }
});