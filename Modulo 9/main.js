$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();//previne o comportamento padrão da página de atualizar ao enviar form
        const novoItem = $('#new-item').val();
        console.log(novoItem);
        const novaLinha = $('<li class="list-item">').text(novoItem);

        $(novaLinha).appendTo('ul');
        $('#new-item').val('');        
    })

    $('ul').on("click", "li", function() {
        if(($(this).css('text-decoration')) == 'line-through solid rgb(255, 255, 255)'){
            $(this).css('text-decoration', 'none')
        } else { 
            $(this).css('text-decoration', 'line-through');
        }
    })
})