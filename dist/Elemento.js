export class Elemento {
    static gerador() {
        const botaoGera = document.querySelector('.gera');
        const perguntaNome = prompt('Qual é o seu nome?');
        botaoGera === null || botaoGera === void 0 ? void 0 : botaoGera.addEventListener('click', function (event) {
            event === null || event === void 0 ? void 0 : event.preventDefault();
            const nome = document.querySelector('#nome');
            const mostraResultado = document.querySelector('.mostraResultado');
            nome.focus();
            mostraResultado.textContent = nome.value;
            let limite = 11;
            let num1 = nome.value;
            if (num1 == randomNumero(0, 10)) {
                mostraResultado.textContent = 'Parábens!!! ' + perguntaNome + ', ' + 'você acertou!!! ' + ' número advinhado foi...' + num1 + '.';
            }
            2;
            1;
            if (num1 >= limite) {
                alert(perguntaNome + ',' + ' o número: ' + nome.value + ' É maior do que o limite permitido.');
            }
            if (nome.value == nome.value) {
                return nome.value = '';
            }
            function randomNumero(a, b) {
                return Math.floor(Math.random() * (b - a + 1));
            }
        });
    }
}
