const funcoes = require('./exportandofuncoes')

funcoes.ola()
funcoes.saida("Roberto")

const {ola, saida} = require('./exportandofuncoes')
saida("Função desestruturada")