
let produtos =[]
const endpointAPI = 'http://localhost:3000/produtos'

async function getProdutos(){
    const resposta = await fetch(endpointAPI)
    produtos = await resposta.json()
    mostrarProdutos(produtos)
}

getProdutos();


function mostrarProdutos(listaProdutos){

    const localParaInserirProdutos = document.querySelector('.produtos__container__lista');

    localParaInserirProdutos.innerHTML = '';

    listaProdutos.forEach(produto => {
        const li = document.createElement('li');
        li.classList.add('produto__card');

        li.innerHTML = `
            <div class="produto__card__principal">
                <img src="${produto.imagem}" alt="${produto.titulo}">
                <p>${produto.titulo}</p>
            </div>
            <div class="produto__card__info">
                <p>R$ ${produto.valor}</p>
                <img src="imgs/trash_vector.svg" alt="icone de lixeira" data-id="${produto.id}" class="delete-icon">
            </div>
        `;

        localParaInserirProdutos.appendChild(li);
    });
}