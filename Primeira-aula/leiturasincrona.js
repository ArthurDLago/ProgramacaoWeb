const { log } = require('console');
const fs = require('fs');

let arquivo = "livros.txt"
const livros = [
                    {nome: "Jeferson Bibliografia", ano: 2022},
                    {nome: "Roberto Bibliografia", ano: 2024},
                    {nome: "Gilberto Bibliografia", ano: 2021},
                    {nome: "Otavio Bibliografia", ano: 2023},

]   
fs.writeFileSync(arquivo, JSON.stringify(livros)) //Não pode escrever objeto e por isso precisa converter para string

console.log("======================= Retorno String ======================= \n")
let dadosArquivo = fs.readFileSync(arquivo).toString('utf-8')
console.log(dadosArquivo, "\n")

console.log("======================= Retorno Objeto =======================")
let dadosJSON = JSON.parse(dadosArquivo)
console.log(dadosJSON);