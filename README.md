# aluraGeek_challenge

Projeto AluraGeek da **Oracle | ONE** + **Alura**: uma plataforma de vendas de produtos Geek desenvolvida utilizando HTML, CSS e JavaScript.

## Funcionalidades

- Mostrar lista de produtos Geek.
- Criar novos produtos com nome, preço e imagem.
- Deletar produtos existentes.

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados:

- Node.js
- npm (Node Package Manager)

## Como Baixar e Rodar o Projeto

1. Clone o repositório:

   ```
   git clone https://github.com/karenCLima/aluraGeek_challenge.git
   cd aluraGeek_challenge
   ```

2. Instale as dependências:

   ```
   npm install
   ```

3. Inicie o servidor JSON fake:

   Certifique-se de que você tenha o `json-server` instalado globalmente ou localmente como uma dependência de desenvolvimento.

   ```
   npm install json-server
   json-server --watch data-db.json
   ```

4. Inicie a aplicação:

   Abra o arquivo `index.html` no seu navegador ou utilize um servidor local para servir os arquivos estáticos (por exemplo, `http-server` ou `live-server`).

   Exemplo com `http-server` (instale-o via npm se necessário):

   ```
   http-server
   ```

5. Explorando a aplicação:

   - Acesse a aplicação no seu navegador através do endereço fornecido pelo servidor local (`http://localhost:8080`, por exemplo).
   - Você poderá visualizar, criar e deletar produtos Geek na interface.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para melhorias no projeto.


