const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const ola = (request, response) =>{
    response.status(200).json("Seja bem-vindo ao express!");
}

const sobre = (request, response) =>{
    response.status(200).json("Seja mau vindo!");
}

const livros = (request, response) =>{
    response.status(200).json(listaLivros);
}

const pegaDados = (request, response) => {
    const {nome, profissao} = request.body;

    response.status(200).json({nome: nome, profissao:profissao, mensagem: "Dados recebidos"})
}

const addLivros = (request, response) => {
    const {nome, editora, ano} = request.body;
    listaLivros.push({nome : nome, editora : editora, ano : ano});
    return response.status(200).json("Livro adicionado com sucesso");
}

const listaLivros = [
    {"nome": "Serviços com Express", "editora": "Moderna", "ano": 2023},
    {"nome": "React", "editora": "IFSUL", "ano": 2022},
    {"nome": "Node", "editora": "Moderna", "ano": 2020}
]


app.route("/").get(ola).post(pegaDados);
app.route("/sobre").get(sobre);
app.route("/livros").get(livros).post(addLivros);

app.listen(3002, () => {
    console.log("servidor rodando....")
})

