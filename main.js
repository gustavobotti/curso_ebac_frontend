$(document).ready(function(){
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function(){
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        $.ajax({
            url: endpoint,
            method: 'GET',
            dataType: 'json',
            success: function(json){
                const logradouro = json.logradouro;
                const bairro = json.bairro;
                const cidade = json.localidade;
                const estado = json.uf;
                const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
                $('#endereco').val(endereco);
                console.log(endereco);
            },
            error: function(){
                fetchFallback();
            },
            complete: function(){
                setTimeout(function() {
                    $(botao).find('i').removeClass('d-none');
                    $(botao).find('span').addClass('d-none');
                }, 1500);
            }
        });

        function fetchFallback() {
            fetch(endpoint)
                .then(function(resposta) {
                    if (!resposta.ok) {
                        throw new Error("Erro na requisição");
                    }
                    return resposta.json();
                })
                .then(function(json){
                    const logradouro = json.logradouro;
                    const bairro = json.bairro;
                    const cidade = json.localidade;
                    const estado = json.uf;
                    const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
                    $('#endereco').val(endereco);
                    console.log(endereco);
                })
                .catch(function(erro) {
                    alert("Erro!");
                })
                .finally(function(){
                    setTimeout(function() {
                        $(botao).find('i').removeClass('d-none');
                        $(botao).find('span').addClass('d-none');
                    }, 1500);
                });
        }
    });

    $('#formulario-pedido').submit(function(evento){
        evento.preventDefault();

        if ($('#nome').val().length === 0){
            throw new Error('Digite o nome');
        }
    });
});
