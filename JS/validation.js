
const camposDoFormulario  = document.querySelectorAll('[required]');

camposDoFormulario.forEach((campo)=>{
    campo.addEventListener('blur', ()=> verificaCampo(campo));
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError',
    'tooLong'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        tooLong: "Preencha um nome válido, o nome não deve passar de 50 caracteres."
    },
    valor: {
        valueMissing: "O campo de valor não pode estar vazio.",
        tooLong: "Preencha um valor válido, o valor não deve passar de 50 caracteres."
    },
    imagem: {
        valueMissing: "O campo de imagem não pode estar vazio.",
        tooShort:"Preencha com uma url válida, o campo deve ter pelo menos 5 caracteres."
    }
}

function verificaCampo(campo){
    let mensagem = "";
    campo.setCustomValidity('');

    if(campo.value.trim().length === 0){
        mensagem = "O campo não pode estar em branco!"
    
    }

    tiposDeErro.forEach(erro=>{
        if(campo.validity[erro]){
            mensagem = mensagens[campo.id][erro];
        }
    })

    const mensagemErro = campo.parentElement.querySelector(`.${campo.id}-erro`);
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput || mensagem){
        mensagemErro.textContent = mensagem;
        mensagemErro.style.display = "block"
    }else {
        mensagemErro.textContent = "";
        mensagemErro.style.display = 'none'
    }
}