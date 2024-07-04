const endpoint = 'http://localhost:3000/produtos'

async function postProduto(titulo, valor, imagem){
    const conexao = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            valor: valor,
            imagem: imagem
        })
    });

    conexao = conexao.json()
    return conexao;
}

const formulario = document.querySelector("[data-formulario]");

async function inserindoProduto(evento){
    evento.preventDefault();

    const titulo = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        await postProduto(titulo, valor, imagem);
        
    } catch (error) {
        console.log(error);
    }

}

formulario.addEventListener("submit", evento => inserindoProduto(evento));