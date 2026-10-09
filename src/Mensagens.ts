export class Mensagens {

    menuTipo(): string {
        return "Escolha o tipo de operação:\n1 - Operação com 2 números\n2 - Bhaskara\n\nOpção: ";
    }

    pedirPrimeiroNumero(): string {
        return "Digite o primeiro número: ";
    }

    pedirSegundoNumero(): string {
        return "Digite o segundo número: ";
    }

    menuOperacoes(): string {
        return [
            "\nEscolha uma operação:",
            "1 - Soma",
            "2 - Subtração",
            "3 - Multiplicação",
            "4 - Divisão",
            "5 - Potenciação",
            "6 - Radiciação"
        ].join("\n");
    }

    pedirOpcao(): string {
        return "Opção: ";
    }

    pedirA(): string {
        return "Digite o valor de a: ";
    }

    pedirB(): string {
        return "Digite o valor de b: ";
    }

    pedirC(): string {
        return "Digite o valor de c: ";
    }

    raiz(indice: number, valor: number): string {
        return `x${indice} = ${valor}`;
    }

    resultado(valor: number): string {
        return `Resultado: ${valor}`;
    }

    erro(descricao: string): string {
        return `Erro: ${descricao}`;
    }

    opcaoInvalida(): string {
        return "Opção inválida.";
    }
}

// Mensagem separada do index