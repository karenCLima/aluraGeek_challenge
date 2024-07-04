const endpointProduto = 'http://localhost:3000/produtos';

async function deleteProduto(id){
    const conexao = await fetch(`${endpointProduto}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });

    const resposta = await conexao.json();
    return resposta;
}


document.addEventListener('DOMContentLoaded', () => {
    const produtosContainer = document.querySelector('.produtos__container__lista'); // Selecione o container dos produtos
  
    produtosContainer.addEventListener('click', async (evento) => {
      const iconeLixeira = evento.target.closest('.delete-icon'); 
  
      if (iconeLixeira) {
        const id = iconeLixeira.getAttribute('data-id');
  
        if (id) {
          try {
            const resposta = await deleteProduto(id);
            const produtoCard = evento.target.closest('.produto__card');
            produtoCard.remove();
          } catch (error) {
            console.error('Erro ao deletar produto:', error);
          }
        }
      }
    });
  });