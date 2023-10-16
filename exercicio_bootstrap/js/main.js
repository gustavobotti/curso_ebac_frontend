$(document).ready(function(){
    $('#telefone').mask('+55 (00) 0 0000-0000', {
        placeholder: '+55 (00) 0 0000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira um nome',
            email: 'Por favor insira um email',
            telefone: 'Por favor insira um telefone'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})