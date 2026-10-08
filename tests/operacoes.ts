import test from "node:test";
import assert from "node:assert/strict";
import { Operacao } from "../src/Operacao";
import { Soma } from "../src/Soma";
import { Subtracao } from "../src/Subtracao";
import { Multiplicacao } from "../src/Multiplicacao";
import { Divisao } from "../src/Divisao";
import { Potenciacao } from "../src/Potenciacao";
import { Radiciacao } from "../src/Radiciacao";
import { Bhaskara } from "../src/Bhaskara";

test("Soma", () => {
    assert.equal(new Soma(2, 3).calcular(), 5);
    assert.equal(new Soma(-2, 3).calcular(), 1);
});

test("Subtração", () => {
    assert.equal(new Subtracao(5, 3).calcular(), 2);
    assert.equal(new Subtracao(3, 5).calcular(), -2);
});

test("Multiplicação", () => {
    assert.equal(new Multiplicacao(4, 3).calcular(), 12);
    assert.equal(new Multiplicacao(4, 0).calcular(), 0);
});

test("Divisão", () => {
    assert.equal(new Divisao(10, 4).calcular(), 2.5);
});

test("Divisão por zero lança erro", () => {
    assert.throws(() => new Divisao(1, 0).calcular(), /dividir por zero/);
});

test("Potenciação", () => {
    assert.equal(new Potenciacao(2, 10).calcular(), 1024);
    assert.equal(new Potenciacao(5, 0).calcular(), 1);
});

test("Radiciação", () => {
    assert.ok(Math.abs(new Radiciacao(9, 2).calcular() - 3) < 1e-9);
    assert.ok(Math.abs(new Radiciacao(27, 3).calcular() - 3) < 1e-9);
});

test("Radiciação com índice zero lança erro", () => {
    assert.throws(() => new Radiciacao(9, 0).calcular(), /zero/);
});

test("Radiciação: raiz par de negativo lança erro", () => {
    assert.throws(() => new Radiciacao(-4, 2).calcular());
});

test("Radiciação: raiz ímpar de negativo funciona", () => {
    assert.ok(Math.abs(new Radiciacao(-8, 3).calcular() - -2) < 1e-9);
});

test("Polimorfismo: todas as operações são Operacao", () => {
    const operacoes: Operacao[] = [
        new Soma(6, 2),
        new Subtracao(6, 2),
        new Multiplicacao(6, 2),
        new Divisao(6, 2),
        new Potenciacao(6, 2),
    ];
    const resultados = operacoes.map((o) => o.calcular());
    assert.deepEqual(resultados, [8, 4, 12, 3, 36]);
});

test("Bhaskara com duas raízes reais", () => {
    assert.deepEqual(new Bhaskara(1, -5, 6).calcular(), [3, 2]);
});

test("Bhaskara com delta zero (raiz dupla)", () => {
    assert.deepEqual(new Bhaskara(1, -2, 1).calcular(), [1, 1]);
});

test("Bhaskara com delta negativo lança erro", () => {
    assert.throws(() => new Bhaskara(1, 0, 1).calcular(), /Delta negativo/);
});

test("Bhaskara com a = 0 lança erro", () => {
    assert.throws(() => new Bhaskara(0, 2, 1).calcular(), /zero/);
});