document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault(); //impede que o resultado seja limpado da tela após sair

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo; //Sorteia um numero aleatoriamente
        numeroAleatorio = Math.floor(numeroAleatorio + 1); //Arredonda o numero sorteado para baixo - mathFLOOR

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})