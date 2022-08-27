
export class Elemento {
    
    static gerador() {
 
 
        const botaoGera = document.querySelector('.gera')
        const perguntaNome:any = prompt('Qual é o seu nome?')
        
        botaoGera?.addEventListener('click', function (event) {
            event?.preventDefault()
            const nome = document.querySelector('#nome') as HTMLInputElement
            const mostraResultado = document.querySelector('.mostraResultado')  as HTMLSpanElement
            nome.focus()
         
            mostraResultado.textContent = nome.value

            let limite:Number = 11
            let num1:Number | any = nome.value

            if(num1 == randomNumero(0,10)){
                mostraResultado.textContent = 'Parábens!!! ' + perguntaNome + ', ' + 'você acertou!!! ' + ' número advinhado foi...' + num1 + '.'
 
            } 2
1
           if(num1 >= limite){
               alert(perguntaNome +',' + ' o número: ' + nome.value + ' É maior do que o limite permitido.')
           }
            
 
            if (nome.value == nome.value) {
                return nome.value = ''
            }
            

            function randomNumero(a: number, b: number) {
                return Math.floor(Math.random() * (b - a + 1))
              
            }}

        )
        
 
    }

    




}