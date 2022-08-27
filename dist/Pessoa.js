export class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    mudaLetra() {
        this.nome.toUpperCase();
        return this.nome;
    }
    static primeiroMetodo() {
        console.log('Primeiro metodo');
    }
}
