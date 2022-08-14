const nome  = document.getElementById('grupo__nome')
const correo  = document.getElementById('grupo__correo')

form.addEvenlistener('submit', (e) => {
	e.preventDefault()

	checkinputs()

})

function checkinputs() {
	const nomeValue = nome.value.trim()
	const correoValue = correo.value.trim()
}

if (nomeValue ===''){
	//mostrar o erro
	//adicionar a classe error
	errorValidation(nome, 'Preencha esse campo')
} else {
	//adicionar a clase de sucesso
sucessoValidation(nome);

}

if (correoValue ==='') {
errorValidation(correo, 'Prencha esse campo') 

}else{
sucessoValidation(correo)

}

function errorValidation(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small')

	small.innerText = message

	formControl.className ='form-control error'

}

function sucessoValidation(input){
	const formControl = input.parentElement;

	formControl.className = 'form-control sucesso'
}