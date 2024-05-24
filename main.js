$(document).ready(function(){
    //Adiciona um evento de mudança(change) ao campo de texto
    $('#input').change( function(){
        
        let input = $(this).val(); // 'THIS' se refere ao elemento selecionado #input

        $('ul').append('<li>'+ input + '</li>'); //aloca o conteúdo dentro da lista - DENTRO DE LI
        $(this).val(''); //limpa o campo após o input
    
    $(document).on("click", "#lista li", function(){
        $(this).toggleClass("line-through");
    })    // Marca a tarefa como concluída ao clicar nela


    // Marca a tarefa como concluída ao clicar nela

    /* $("li").click(function(){
        $(this).toggleClass("line-through");

    })*/



    
    });

});  