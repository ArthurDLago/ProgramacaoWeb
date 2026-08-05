const fs = require('fs');

function lerProdutos(caminho) {
  const conteudo = fs.readFileSync(caminho, 'utf-8');
  const produtos = JSON.parse(conteudo);
  
  console.log("Produtos cadastrados:");
  console.log(produtos);
  return produtos;
}

function adicionarProduto(novoProduto, caminho) {
  const conteudo = fs.readFileSync(caminho, 'utf-8');
  const produtos = JSON.parse(conteudo);

  produtos.push(novoProduto);

  fs.writeFileSync(caminho, JSON.stringify(produtos, null, 2));

  lerProdutos(caminho);
}

const caminhoArquivo = './produtos.txt';

const novoProduto = {
  id: 4,
  nome: 'Toddynho',
  preco: 5
};

adicionarProduto(novoProduto, caminhoArquivo);