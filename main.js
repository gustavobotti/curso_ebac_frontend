const form = document.querySelector('form');
const campoA = document.querySelector('#campo-a');
const campoB = document.querySelector('#campo-b');
const botaoEnviar = document.querySelector('#btn-enviar');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	if (campoB.value > campoA.value) {
		alert('OK!');
	} else {
		alert('Inválido! O campo B deve ser maior que o campo A.');
	}
});