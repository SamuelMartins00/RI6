# RI6 – Calculadora CLI em TypeScript

Atividade **RI6** da matéria **Técnicas de Programação**: uma calculadora de linha de comando (CLI) feita em TypeScript para praticar os conceitos principais da Programação Orientada a Objetos (POO): **criação de objetos, herança, encapsulamento e polimorfismo**.

## Funcionalidades

**Operações com dois números** (cada uma é uma classe própria):

| Operação      | Classe          | Observação                                      |
|---------------|-----------------|-------------------------------------------------|
| Soma          | `Soma`          |                                                 |
| Subtração     | `Subtracao`     |                                                 |
| Multiplicação | `Multiplicacao` |                                                 |
| Divisão       | `Divisao`       | Erro ao dividir por zero                        |
| Potenciação   | `Potenciacao`   | 1º número elevado ao 2º                         |
| Radiciação    | `Radiciacao`    | 2º número é o índice; erro para índice 0 ou raiz par de negativo |

**Equação do 2º grau:** a classe `Bhaskara` recebe `a`, `b` e `c` e calcula as raízes reais pela fórmula de Bhaskara (erro se `a = 0` ou delta negativo).

**Extras do CLI**
- Menu em loop: é possível fazer várias operações sobre o mesmo par de números.
- Validação de entrada (aceita vírgula ou ponto como separador decimal).
- Digite **`sair`** em qualquer pergunta para encerrar o programa.

## Conceitos de POO aplicados

- **Herança:** `Soma`, `Subtracao`, `Multiplicacao`, `Divisao`, `Potenciacao` e `Radiciacao` estendem a classe abstrata `Operacao`.
- **Polimorfismo:** o `index.ts` trabalha com uma variável do tipo `Operacao` e chama `calcular()`, sem saber qual operação concreta está por trás.
- **Encapsulamento:** os números ficam como atributos `protected` em `Operacao`, e `a`, `b`, `c` são `private` em `Bhaskara`; o acesso é feito pelos métodos da classe.
- **Objetos:** cada cálculo cria uma instância da classe correspondente.

## Estrutura

```
RI6/
├── src
│   ├── Bhaskara.ts
│   ├── Divisao.ts
│   ├── Multiplicacao.ts
│   ├── Operacao.ts
│   ├── Potenciacao.ts
│   ├── Radiciacao.ts
│   ├── Soma.ts
│   ├── Subtracao.ts
│   └── index.ts
├── tests
│   └── operacoes.ts
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── tsconfig.json
```

## Como usar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
npm install        # instala as dependências
npm run dev        # executa a calculadora (TypeScript direto, via tsx)
```

Para compilar e executar o JavaScript gerado:

```bash
npm run build      # gera a pasta dist/
npm start
```

## Testes

```bash
npm test
```

Os testes usam o executor nativo do Node (`node:test`) e cobrem todas as operações, os casos de erro (divisão por zero, delta negativo, etc.) e o polimorfismo.

## Exemplo de uso

```
Escolha o tipo de operação:
1 - Operações com 2 números
2 - Bhaskara (equação do 2º grau)
Opção: 2
Digite o valor de a: 1
Digite o valor de b: -5
Digite o valor de c: 6
x1 = 3
x2 = 2
```

## Autor

Samuel Martins