const form = document.getElementById("form-ex");

form.addEventListener("submit", function(evento){
    evento.preventDefault();
});

    function validarCampo(){
        const campoA = document.getElementById("numero1");
        const campoB = document.getElementById("numero2");
        const cA = Number(campoA.value);
        const cB = Number(campoB.value);
        if (cA > cB){
            document.querySelector(".erro").style.display = "block";
        } else {
            document.querySelector(".sucesso").style.display = "block";
        }

}